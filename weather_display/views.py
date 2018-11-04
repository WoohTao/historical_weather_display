from django.shortcuts import render
from . import models
# from django.http import HttpResponse


def index(request):
    return render(request, 'index.html')


def place_detail(request, place_name='null'):
    date = []
    max_temp = []
    min_temp = []
    '''气候数据'''
    weather = []
    weather_1 = []
    weather_data = {}
    '''风向'''
    wind_direct = []
    wind_direct_1 = []
    wind_direct_data = {}
    '''风力'''
    wind_speed = []
    wind_speed_1 = []
    wind_speed_data ={}
    if place_name == 'beijing':
        beijing_data = models.beijing.objects.all()
        # beijing_data_month = beijing_data.filter(weather_date__year=2014, weather_date__month=4)

        # 从Queryset中获取数据并序列化
        for e in beijing_data:
            date.append(str(e.weather_date))
            max_temp.append(e.max_temp)
            min_temp.append(e.min_temp)
            weather.append(e.weather)
            wind_direct.append(e.wind_direct)
            wind_speed.append(e.wind_speed)
            if e.weather not in weather_1:
                weather_1.append(e.weather)
            if e.wind_direct not in wind_direct_1:
                wind_direct_1.append(e.wind_direct)
            if e.wind_speed not in wind_speed_1:
                wind_speed_1.append(e.wind_speed)

        weather_data.fromkeys(weather_1)
        wind_direct_data.fromkeys(wind_direct_1)
        wind_speed_data.fromkeys(wind_speed_1)
        # 统计数据
        for i in weather_1:
            weather_data[i] = weather.count(i)
        for i in wind_direct_1:
            wind_direct_data[i] = wind_direct.count(i)
        for i in wind_speed_1:
            wind_speed_data[i] = wind_speed.count(i)

    context = {
        'place_name': '北京',
        'date': date,
        'max_temp': max_temp,
        'min_temp': min_temp,
        'weather_list': weather_1,
        'weather_data': weather_data,
        'wind_direct_list': wind_direct_1,
        'wind_direct_data': wind_direct_data,
        'wind_speed_list': wind_speed_1,
        'wind_speed_data': wind_speed_data
    }
    return render(request, 'city-data-display.html', context)
