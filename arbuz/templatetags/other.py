from translator.views import *
from base64 import b64encode
from arbuz.templatetags.base import *


class Other_Manager(Base_Tag_Manager):

    def Get_Field_Type(self):
        field = self.values['field']
        return field.field.widget.__class__.__name__

    def Get_Path_Or_Url(self):
        name = self.values['name']
        full = self.values['full']
        kwargs = self.values['kwargs']

        if full:
            return self.Get_Urls(name, kwargs, current_language=True)

        if not full:
            return self.Get_Path(name, kwargs, current_language=True)

    def Create_Sign_In_Redirect_URL(self):
        app = self.values['app']
        name = self.values['name']
        kwargs = self.values['kwargs']

        redirect_url = self.Get_Path(name, kwargs, current_language=True)
        redirect_url = b64encode(bytes(redirect_url, 'utf-8'))
        redirect_url = redirect_url.decode('utf-8')
        return '/{0}/sign_in/redirect/{1}/'.format(app, redirect_url)

    def Get_Text_In_Current_Language(self):
        pk = self.values['pk']
        language = self.values['language']
        return Text(self.request, pk, language)

    def Get_App_Name(self):
        app_name = self.request.session['arbuz_app']
        pk = Language_EN.objects.get(value=app_name).pk
        return Text(self.request, pk).replace('.', ' ').title()



@register.filter('fieldtype')
def fieldtype(field):

    task = 'Get_Field_Type'
    values = {'field': field}

    return Other_Manager(task, values).OUT

@register.simple_tag(takes_context=True)
def url(context, name=None, full=False, *args, **kwargs):

    task = 'Get_Path_Or_Url'
    request = context['request']
    values = {
        'name': name,
        'full': full,
        'kwargs': kwargs,
    }

    return Other_Manager(task, values, request).OUT

@register.simple_tag(takes_context=True)
def sign_in_redirect(context, app, name=None, *args, **kwargs):

    task = 'Create_Sign_In_Redirect_URL'
    request = context['request']
    values = {
        'app': app,
        'name': name,
        'kwargs': kwargs,
    }

    return Other_Manager(task, values, request).OUT

@register.simple_tag(takes_context=True)
def text(context, pk, language=None):

    task = 'Get_Text_In_Current_Language'
    request = context['request']
    values = {
        'pk': pk,
        'language': language
    }

    return Other_Manager(task, values, request).OUT

@register.simple_tag(takes_context=True)
def get_app_name(context):

    task = 'Get_App_Name'
    request = context['request']

    return Other_Manager(task, {}, request).OUT