from django.conf.urls import url
from payment import views


urlpatterns = [
    url(r'^$', views.Payment_Manager.Launch, name='payment'),
    url(r'^potwierdzenie/$', views.Apply_Payment.Launch, name='payment.apply'),
    url(r'^anulowanie/$', views.Cancel_Payment.Launch, name='payment.cancel'),
    url(r'^dotpay/$', views.DotPay.Valid_DotPay, name='payment.dotpay'),
    url(r'^paypal/$', views.PayPal.Generate_Mail, name='payment.paypal'),
    url(r'^kup_teraz/(?P<pk>\d+)/$', views.Buy.Buy_Product, name='payment.buy'),
]
