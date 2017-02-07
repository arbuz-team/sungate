from arbuz.views import *
from cart.models import *
from payment.forms import *
from payment.models import *
from arbuz.settings import *

from django.views.decorators.csrf import csrf_exempt

from paypal.standard.forms import PayPalPaymentsForm
from paypal.standard.models import ST_PP_COMPLETED
from paypal.standard.ipn.signals import valid_ipn_received
from paypal.standard.ipn.signals import invalid_ipn_received


class PayPal(Dynamic_Base):

    @staticmethod
    def Valid_PayPal(sender, **kwargs):
        ipn = sender

        if ipn.payment_status == ST_PP_COMPLETED:

            # check receiver
            if ipn.receiver_email != PAYPAL_RECEIVER_EMAIL:
                return

            payment = Payment.objects.get(pk=ipn.custom)
            cart = Product_In_Payment.objects.filter(payment=payment)

            # check amount paid
            if ipn.mc_gross != payment.total_price:
                return

            # check currency
            if ipn.currency_code != payment.currency:
                return

            for in_payment in cart:
                in_payment.product.approved = True
                in_payment.product.save()

    def Create_PayPal_From(self):

        paypal_dict = \
        {
            'business':         PAYPAL_RECEIVER_EMAIL,
            'item_name':        'sungate',
            'amount':           self.content['total_price'],
            'custom':           self.content['payment'],
            'currency_code':    self.request.session['translator_currency'],

            'notify_url':       self.Get_Urls('paypal-ipn', current_language=True),
            'return':           self.Get_Urls('payment.apply', current_language=True),
            'cancel_return':    self.Get_Urls('payment.cancel', current_language=True),
        }

        return PayPalPaymentsForm(initial=paypal_dict)

valid_ipn_received.connect(PayPal.Valid_PayPal)
invalid_ipn_received.connect(PayPal.Valid_PayPal)



class DotPay(Dynamic_Base):

    @staticmethod
    @csrf_exempt
    def Valid_DotPay(request):

        Check_Session(request)
        if request.method == 'POST':
            if request.POST['operation_status'] == 'completed':

                payment = Payment.objects.get(pk=request.POST['control'])
                cart = Product_In_Payment.objects.filter(payment=payment)

                if request.POST['id'] != DOTPAY_RECEIVER_ID:
                    return HttpResponse('NOK')

                if request.POST['operation_currency'] != payment.currency:
                    return HttpResponse('NOK')

                if float(request.POST['operation_amount']) != payment.total_price:
                    return HttpResponse('NOK')

                for in_payment in cart:
                    in_payment.product.approved = True
                    in_payment.product.save()

                return HttpResponse('OK')

        return HttpResponse('It is not for you.')

    def Create_DotPay_From(self):

        dotpay_dict = \
        {
            'amount':       self.content['total_price'],
            'currency':     self.request.session['translator_currency'],
            'description':  'Opis produktu',
            'control':      self.content['payment'],

            'ch_lock':      0,
            'channel':      0,
            'type':         3,
            'id':           DOTPAY_RECEIVER_ID,
            'lang':         self.request.session['translator_language'].lower(),

            'URL':          self.Get_Urls('payment.apply', current_language=True),
            'URLC':         self.Get_Urls('payment.dotpay', current_language=True),
        }

        return Form_Dotpay(initial=dotpay_dict)



class Payment_Manager(Dynamic_Event_Menager, PayPal, DotPay):

    @staticmethod
    def Get_Total_Price(user, currency='eur'):
        cart = Cart.objects.filter(user=user)
        total = 0

        for in_cart in cart:

            if currency == 'eur':
                total += in_cart.product.price_eur

            if currency == 'pln':
                total += in_cart.product.price_pln

        return total / 100

    def Save_Payment(self):

        payment = Payment\
        (
            user=self.content['user'],
            total_price=self.content['total_price'],
            currency=self.request.session['translator_currency']
        )

        payment.save()
        self.content['payment'] = payment.pk
        for product in self.content['cart']:

            Product_In_Payment\
            (
                payment=payment,
                product=product
            )

    def Manage_Content_Ground(self):

        self.content['user'] = User.objects.get(unique=self.request.session['user_unique'])
        self.content['cart'] = Cart.objects.filter(user=self.content['user'])
        self.content['total_price'] = Payment_Manager.Get_Total_Price(self.content['user'])
        self.Save_Payment()

        self.content['paypal'] = self.Create_PayPal_From()
        self.content['dotpay'] = self.Create_DotPay_From()
        return self.Render_HTML('payment/payment.html')

    @staticmethod
    def Launch(request):
        return Payment_Manager(request, authorization=True).HTML



class Apply_Payment(Dynamic_Event_Menager):

    def Manage_Content_Ground(self):
        return self.Render_HTML('payment/apply.html')

    def Error_No_Event(self):
        return self.Manage_Index()

    @staticmethod
    @csrf_exempt
    def Launch(request):
        return Apply_Payment(request).HTML



class Cancel_Payment(Dynamic_Event_Menager):

    def Manage_Content_Ground(self):
        return self.Render_HTML('payment/cancel.html')

    def Error_No_Event(self):
        return self.Manage_Index()

    @staticmethod
    @csrf_exempt
    def Launch(request):
        return Cancel_Payment(request).HTML
