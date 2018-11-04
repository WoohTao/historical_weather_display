MapContainer = document.getElementById('pie-2');
myChart = echarts.init(MapContainer);
let wind_direct_list = JSON.parse(document.getElementById("wind_direct_list").textContent);
let wind_direct_data = JSON.parse(document.getElementById("wind_direct_data").textContent);
let wind_direct_SeriesData = Series_data(wind_direct_data);
let wind_direct_SelectData = Select_data(wind_direct_list);

option = {
    title : {
        text: '风向统计',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: wind_direct_list,
        selected: wind_direct_SelectData
    },
    series : [
        {
            name: '风向（天）',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: wind_direct_SeriesData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


function Series_data(weather_data){
    var weather_SeriesData=[];
    for(var key in weather_data){
        weather_SeriesData.push({
            name:key,
            value:weather_data[key]
            });
    }
    return weather_SeriesData;
}

function Select_data(weather_list){
    var weather_SelectData={};
    for(var i=0;i<weather_list.length;i++){
        weather_SelectData[weather_list[i]]=i<6;
    }
    return weather_SelectData;
}

myChart.setOption(option);
MapSize = document.getElementById("pie-2");
MapWidth = MapSize.clientWidth||MapSize.offsetWidth;
MapContainer.style.width = MapWidth+'px';
MapContainer.style.height = MapWidth*0.6+'px';
myChart.resize();