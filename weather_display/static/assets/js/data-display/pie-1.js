MapContainer = document.getElementById('pie-1');
myChart = echarts.init(MapContainer);
let weather_list = JSON.parse(document.getElementById("weather_list").textContent);
let weather_data = JSON.parse(document.getElementById("weather_data").textContent);
let weather_SeriesData = Series_data(weather_data);
let weather_SelectData = Select_data(weather_list);
// let weather_SelectData={"多云转阴": 0,
//     "阴转晴": 1,
//     "晴": 2,
//     "霾转多云": 3,
//     "晴转阴": 4,
//     "阴": 5
// };
option = {
    title : {
        text: '天气统计',
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
        data: weather_list,
        selected:weather_SelectData
    },
    series : [
        {
            name: '天气（天）',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: weather_SeriesData,
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
MapSize = document.getElementById("pie-1");
MapWidth = MapSize.clientWidth||MapSize.offsetWidth;
MapContainer.style.width = MapWidth+'px';
MapContainer.style.height = MapWidth*0.6+'px';
myChart.resize();