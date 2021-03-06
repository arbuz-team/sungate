# -*- coding: utf-8 -*-
from sender.views import *
from searcher.views import *
from main.models import *
from main.forms import *


class Editable_Tab(Dynamic_Event_Manager):

    def Manage_Content_Ground(self):
        pass

    def Manage_Form_Content_Tab(self):

        content_tab = Form_Content_Tab(
            self.request, self.request.POST)

        if content_tab.is_valid():

            if self.request.session['main_content_tab']:
                content = self.request.session['main_content_tab']

            else: content = content_tab.save(commit=False)

            content.tab_name = content_tab.cleaned_data['tab_name']
            content.header = content_tab.cleaned_data['header']
            content.paragraph = content_tab.cleaned_data['paragraph']
            content.language = self.request.session['translator_language']
            content.save()

            content.Save_Image(content_tab.cleaned_data['image'])

            return Dialog_Prompt(self.request, self.app_name, apply=True).HTML
        return Dialog_Prompt(self.request, self.app_name, not_valid=True).HTML

    def Manage_Form(self):

        if self.request.POST['__form__'] == 'content_tab':
            return self.Manage_Form_Content_Tab()

        return Dynamic_Event_Manager.Manage_Form(self)

    def Manage_Button(self):

        if self.request.POST['__button__'] == 'delete':
            Content_Tab.objects.get(pk=self.request.POST['value']).delete()

        return JsonResponse({'__button__': 'true'})

    @staticmethod
    def New(request):
        return Editable_Tab(request, only_root=True).HTML

    @staticmethod
    def Edit(request, pk):
        request.session['main_content_tab'] = \
            Content_Tab.objects.get(pk=pk)

        return Editable_Tab(request, only_root=True).HTML

    @staticmethod
    def Delete(request):
        return Editable_Tab(request, only_root=True).HTML

    @staticmethod
    def Launch(request):
        pass



class Start(Dynamic_Event_Manager):

    def Manage_Content_Ground(self):
        self.content['recommended'] = Product.objects.filter(
            pk__in=Recommended_Product.objects.all().values('product__pk'))

        return self.Render_HTML('main/start.html')

    @staticmethod
    def Launch(request):
        return Start(request).HTML



class Products(Dynamic_Event_Manager):

    def Get_Current_Page(self, number_product_on_page):

        page = self.request.session['main_page']
        start = (page-1) * number_product_on_page
        end = page * number_product_on_page

        products = self.request.session['searcher_result']
        return products[start:end]

    @staticmethod
    def Get_List_Pages(number_of_pages):
        return list(range(1, number_of_pages + 1))

    def Get_Split_Pages(self, number_of_pages):
        page = self.request.session['main_page']

        if number_of_pages < 8:  # 1 2 3 4 5 6 7
            return [list(range(1, number_of_pages + 1))]

        if page < 5:  # 1 2 3 4 5 … 9
            return [list(range(1, 6)), [number_of_pages]]

        if page > number_of_pages - 4:  # 1 … 5 6 7 8 9
            return [[1], list(range(number_of_pages - 4, number_of_pages + 1))]

        # 1 … 3 4 5 6 7 … 9
        return [[1], list(range(page - 2, page + 3)), [number_of_pages]]

    def Manage_Content_Ground(self):

        products = self.request.session['searcher_result']
        number_product_on_page = self.request.session['main_number_product_on_page']
        number_of_pages = int(len(products) / number_product_on_page)
        if len(products) % number_product_on_page:
            number_of_pages += 1

        self.content['products'] = self.Get_Current_Page(number_product_on_page)
        self.content['number_of_pages'] = number_of_pages
        self.content['list_pages'] = self.Get_List_Pages(number_of_pages)
        self.content['split_pages'] = self.Get_Split_Pages(number_of_pages)
        self.content['next_page'] = self.request.session['main_page'] + 1
        self.content['prev_page'] = self.request.session['main_page'] - 1

        return self.Render_HTML('main/products.html')

    def Manage_Button(self):

        self.request.session['main_page'] = \
            int(self.request.POST['value'])

        return JsonResponse({'__button__': 'true'})

    @staticmethod
    def Launch(request):
        return Products(request).HTML



class About(Editable_Tab):

    def Manage_Content_Ground(self):
        language = self.request.session['translator_language']
        self.content['content'] = Content_Tab.objects.filter(
            tab_name='about', language=language)

        return self.Render_HTML('main/about.html')

    @staticmethod
    def Launch(request):
        return About(request).HTML



class Contact(Editable_Tab):

    def Create_Titles(self):

        self.content['form_detail'] = [
            {
                'title':    Text(self.request, 81),
                'hidden':   'url',
            },
            {
                'title':    Text(self.request, 82),
                'hidden':   'product',
            },
            {
                'title':    Text(self.request, 83),
                'hidden':   'url product',
            },
        ]

    def Manage_Content_Ground(self):
        language = self.request.session['translator_language']
        self.content['form'] = Form_Email_Contact(self.request)
        self.content['content'] = Content_Tab.objects.filter(
            tab_name='contact', language=language)

        self.Create_Titles()
        return self.Render_HTML('main/contact.html', 'email_contact')

    def Manage_Form(self):

        self.Create_Titles()
        self.content['form'] = Form_Email_Contact(
            self.request, self.request.POST)

        if self.content['form'].is_valid():

            title = self.content['form'].cleaned_data['title']
            email = self.content['form'].cleaned_data['email']

            content = {
                'client':   self.content['form'].cleaned_data['client'],
                'question': self.content['form'].cleaned_data['message'],
                'product':  self.content['form'].cleaned_data['product'],
                'url':      self.content['form'].cleaned_data['url'],
            }

            Sender(self.request).Send_Contact_Question(title, content, email)

            return self.Render_HTML('main/contact.html', 'email_contact')
        return self.Render_HTML('main/contact.html', 'email_contact')

    @staticmethod
    def Launch(request):
        return Contact(request).HTML
