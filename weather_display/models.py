from django.db import models


class PlaceDetail(models.Model):
    weather_date = models.DateField(primary_key=True)
    max_temp = models.CharField(max_length=10)
    min_temp = models.CharField(max_length=10)
    weather = models.CharField(max_length=30)
    wind_direct = models.CharField(max_length=30)
    wind_speed = models.CharField(max_length=30)

    class Meta:
        abstract = True

    def __str__(self):
        return str(self.weather_date)


class beijing(PlaceDetail):
    class Meta:
        managed = False
        db_table = 'beijing'

