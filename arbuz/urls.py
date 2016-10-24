from django.conf.urls import url, include
from django.conf.urls import handler404

urlpatterns = [
    url(r'^uzytkownik/', include('uzytkownik.urls')),
    url(r'^komunikat/', include('komunikat.urls')),
    url(r'^produkt/', include('produkt.urls')),
    url(r'', include('stronka.urls')),
]

#handler404 = 'komunikat.views.Wyswietl_404'
