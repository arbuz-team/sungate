# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary
from selenium.common.exceptions import NoSuchElementException
from searcher.views import *
from arbuz.base import *
import os, pickle

SCRIPT_DIR = BASE_DIR + '/setting/script/'


class Manager:

    def Show_Exception(self, e, url):

        message = '\nException {0}:\n'.format(self.number_exception)
        message += '  Message: {0}\n'.format(str(e.msg))
        message += '  URL: {0}\n'.format(url)

        print(message)
        os.system('echo "{0}" >> {1}exceptions.log'
                  .format(message, SCRIPT_DIR))

    def Unpack_Products(self):

        if os.path.exists('{0}products.data'.format(SCRIPT_DIR)):
            with open('{0}products.data'.format(SCRIPT_DIR), 'rb') as plik:
                self.products = pickle.load(plik)

            return True
        return False

    def Sign_In(self):

        self.firefox.get('http://cosmetix.eu/logowanie?back=my-account')
        email = self.firefox.find_element_by_id('email')
        email.send_keys('info@spasungate.pl')

        passwd = self.firefox.find_element_by_id('passwd')
        passwd.send_keys('SAKWVH6c')

        submit = self.firefox.find_element_by_id('SubmitLogin')
        submit.click()

    def Load_Brand_URL(self):

        self.firefox.get('http://cosmetix.eu/3-wypelniacze-kwasy-hialuronowe')
        brand_block = self.firefox.find_element_by_id('ul_layered_manufacturer_0')
        brands = brand_block.find_elements_by_css_selector('li.nomargin')

        for brand in brands:
            link = brand.find_element_by_css_selector('label > a')

            element = {
                'name': ' '.join(link.text.split(' ')[:-1]),
                'url': link.get_attribute('href'),
            }

            self.brands.append(element)

    def Load_Products_URL(self, brand):

        self.firefox.get(brand['url'])
        products = self.firefox.find_elements_by_css_selector('li.ajax_block_product')

        for product in products:
            link = product.find_element_by_css_selector('h3 > a')

            product = {
                'brand' : brand['name'],
                'url': link.get_attribute('href'),
            }

            self.products.append(product)

    def Load_Product_Data(self, product):

        try:

            self.firefox.get(product['url'])
            title = self.firefox.find_element_by_css_selector('#pb-left-column > div > h1')
            description = self.firefox.find_element_by_css_selector('#idTab1')
            image = self.firefox.find_element_by_css_selector('#image-block img')
            price = self.firefox.find_element_by_id('our_price_display')

            self.firefox.find_element_by_id('more_info_tab_data_sheet').click()
            purpose = self.firefox.find_elements_by_css_selector('#idTab2 li')

            product['title'] = title.text
            product['description'] = description.text
            product['image'] = image.get_attribute('src')
            product['price'] = int(float(price.text[:-3].replace(',', '.').replace(' ', '')) * 100)
            product['purpose'] = purpose[0].text.replace('Zastosowanie : ', '')

        except NoSuchElementException as e:
            self.number_exception += 1
            self.Show_Exception(e, product['url'])

    def Save_Products(self):
        with open('{0}products.data'.format(SCRIPT_DIR), 'wb') as plik:
            pickle.dump(self.products, plik, pickle.HIGHEST_PROTOCOL)

    def Create_Details(self, product):

        details = {

            'details_en': Details_EN(
                name=product['title'],
                description='',
            ),

            'details_pl': Details_PL(
                name=product['title'],
                description=product['description'],
            ),

            'details_de': Details_DE(
                name=product['title'],
                description='',
            ),
        }

        details['details_en'].save()
        details['details_pl'].save()
        details['details_de'].save()

        return details

    def Create_Filters(self, product):

        filters = {
            'brand': Brand.objects.filter(name=product['brand']).first(),
            'purpose': Purpose.objects.filter(name=product['purpose']).first()
        }

        if not filters['brand']:

            filters['brand'] = Brand(
                name=product['brand']
            )
            filters['brand'].save()

        if not filters['purpose']:

            filters['purpose'] = Purpose(
                name=product['purpose']
            )
            filters['purpose'].save()

        return filters

    def Insert_Product_To_Database(self):

        for product in self.products:

            details = self.Create_Details(product)
            filters = self.Create_Filters(product)


            new_product = Product(
                details_en=details['details_en'],
                details_pl=details['details_pl'],
                details_de=details['details_de'],
                price_eur=int(product['price'] / 4.31259388),
                price_pln=product['price'],
                keywords='',
                stock=0,
                where_display=Where_Display.objects.get(display_en=True, display_pl=True, display_de=True),
                brand=filters['brand'],
                purpose=filters['purpose']
            )
            new_product.save()

            image = Dynamic_Base.Save_Image_From_URL(product['image'])
            new_product.Save_Image(image)

    def Launch(self):

        if self.Unpack_Products():
            return

        binary = FirefoxBinary('/home/endo93/Firefox 46.0/firefox')
        self.firefox = webdriver.Firefox(firefox_binary=binary)

        self.Sign_In()
        self.Load_Brand_URL()

        for brand in self.brands:
            self.Load_Products_URL(brand)

        for product in self.products:
            self.Load_Product_Data(product)

        self.Save_Products()
        self.firefox.close()

    def __init__(self):

        self.firefox = None
        self.page_source = None
        self.brands = []
        self.products = []
        self.number_exception = 0

        if os.path.exists(SCRIPT_DIR + 'exceptions.log'):
            os.system('rm {0}exceptions.log'.format(SCRIPT_DIR))

        self.Launch()
        self.Insert_Product_To_Database()

def Start():
    Manager()
