from django.db import models
from arbuz.settings import BASE_DIR, MEDIA_ROOT
from PIL import Image
from io import BytesIO
from urllib.request import urlopen
import os


class Details_EN(models.Model):

    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.name

class Details_PL(models.Model):

    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.name

class Details_DE(models.Model):

    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.name



class Where_Display(models.Model):

    display_en = models.BooleanField()
    display_pl = models.BooleanField()
    display_de = models.BooleanField()

    def __str__(self):
        return 'en: {0}, pl: {1}, de: {2}'\
            .format(self.display_en, self.display_pl, self.display_de)



class Brand(models.Model):

    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name



class Purpose(models.Model):

    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name



class Product(models.Model):

    details_en = models.ForeignKey(Details_EN)
    details_pl = models.ForeignKey(Details_PL, null=True)
    details_de = models.ForeignKey(Details_DE, null=True)
    where_display = models.ForeignKey(Where_Display)

    image = models.ImageField(blank=True)
    price_eur = models.IntegerField()
    price_pln = models.IntegerField()
    keywords = models.TextField(blank=True)

    brand = models.ForeignKey(Brand)
    purpose = models.ForeignKey(Purpose)

    def Save_Image_From_Form(self, name):
        image_format = os.path.splitext(name)[1]
        new_path = '/_static/img/product/{0}{1}' \
            .format(self.pk, image_format)

        old_path = MEDIA_ROOT + '/{0}' \
            .format(os.path.basename(self.image.name))

        os.rename(old_path, BASE_DIR + new_path)
        self.image.name = new_path
        self.save()

    def Save_Image_From_URL(self, url):
        binary_file = BytesIO(urlopen(url).read())
        image = Image.open(binary_file)
        new_path = '/_static/img/product/{0}.{1}' \
            .format(self.pk, image.format.lower())

        image.save(BASE_DIR + new_path)
        self.image.name = new_path
        self.save()

    def __str__(self):
        return self.details_en.name
