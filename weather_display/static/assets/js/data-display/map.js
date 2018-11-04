var MapContainer = document.getElementById('map-wrap')
var myChart = echarts.init(MapContainer);
var geoCoordMap = {
        "北京":[116.46,39.92],
        "天津":[117.2,39.13],
        "上海":[121.48,31.22],
        "重庆":[106.54,29.59],
        "石家庄":[114.48,38.03],
        "沈阳":[123.38,41.8],
        "哈尔滨":[126.63,45.75],
        "杭州":[120.19,30.26],
        "福州":[119.3,26.08],
        "济南":[117,36.65],
        "广州":[113.23,23.16],
        "武汉":[114.31,30.52],
        "成都":[104.06,30.67],
        "昆明":[102.73,25.04],
        "兰州":[103.73,36.03],
        "南宁":[108.33,22.84],
        "银川":[106.27,38.47],
        "太原":[112.53,37.87],
        "长春":[125.35,43.88],
        "南京":[118.78,32.04],
        "合肥":[117.27,31.86],
        "南昌":[115.89,28.68],
        "郑州":[113.65,34.76],
        "长沙":[113,28.21],
        "海口":[110.35,20.02],
        "贵阳":[106.71,26.57],
        "西安":[108.95,34.27],
        "西宁":[101.74,36.56],
        "呼和浩特":[111.65,40.82],
        "拉萨":[91.11,29.97],
        "乌鲁木齐":[87.68,43.77],
};
myChart.on('click', function (params) {
    console.log(params);
    return window.location.href=params.value[2];
});
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    backgroundColor: '#7a96a2',
    // title: {
    //     text: '全国主要城市历史天气',
    //     x:'center',
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    tooltip: {
        trigger: 'item',
        formatter:'{b} <br /> 点击查看天气详情'
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['城市'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
             emphasis: {
                show: false
             }
            //emphasis: {
                //backgroundColor:'',
                //position: 'top',
                //borderColor: '#fff',
                //borderWidth: 1
            //}
        },
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
            name: '城市',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name:"北京",value:'beijing'},
                {name:"天津",value:'tianjin'},
                {name:"上海",value:'shanghai'},
                {name:"重庆",value:'chongqing'},
                {name:"石家庄",value:'shijiazhuang'},
                {name:"沈阳",value:'shenyang'},
                {name:"哈尔滨",value:'haerbin'},
                {name:"杭州",value:'hangzhou'},
                {name:"福州",value:'fuzhou'},
                {name:"济南",value:'jinan'},
                {name:"广州",value:'guangzhou'},
                {name:"武汉",value:'wuhan'},
                {name:"成都",value:'chengdu'},
                {name:"昆明",value:'kunming'},
                {name:"兰州",value:'lanzhou'},
                {name:"南宁",value:'nanning'},
                {name:"银川",value:'yinchun'},
                {name:"太原",value:'taiyuan'},
                {name:"长春",value:'changchun'},
                {name:"南京",value:'nanjing'},
                {name:"合肥",value:'hefei'},
                {name:"南昌",value:'nanchang'},
                {name:"郑州",value:'zhengzhou'},
                {name:"长沙",value:'changsha'},
                {name:"海口",value:'haikou'},
                {name:"贵阳",value:'guiyang1'},
                {name:"西安",value:'xian'},
                {name:"西宁",value:'xining'},
                {name:"呼和浩特",value:'huhehaote'},
                {name:"拉萨",value:'lasa'},
                {name:"乌鲁木齐",value:'wulumuqi'}
            ]),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                color: '#ffbbcf',
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
};
myChart.setOption(option);
var MapSize = document.getElementById("map-wrap");
var MapWidth = MapSize.clientWidth||MapSize.offsetWidth;
MapContainer.style.width = MapWidth+'px';
MapContainer.style.height = MapWidth*0.6+'px';
myChart.resize();