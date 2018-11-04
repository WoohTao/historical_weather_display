let MapContainer = document.getElementById('line')
let myChart = echarts.init(MapContainer);
let name = JSON.parse(document.getElementById('name').textContent);
let data_line = JSON.parse(document.getElementById('data_line').textContent);
let max_temp = JSON.parse(document.getElementById('max_temp').textContent);
let min_temp = JSON.parse(document.getElementById('min_temp').textContent);
let name_list = [name+'气温', name+'-最高气温(℃)',name+'-最低气温(℃)'];

option = {
    title: {
        text: name_list[0]
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left:'20%',
        data: name_list,
    },
    xAxis: {
        type:'category',
        boundaryGap: false,
        data:data_line
    },
    yAxis: {
        splitLine: {
            show: false
        }
    },
    toolbox: {
        left: '80%',
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: [{
        start: 0,
        end: 20
    }, {
        type: 'inside'
    }],
    visualMap: {
        top: 10,
        right: 10,
        pieces: [{
            lte: -35,
            color: '#0b0a44'
        },{
            gt: -35,
            lte: -30,
            color: '#0e0c4b'
        },{
            gt: -30,
            lte: -25,
            color: '#161180'
        }, {
            gt: -25,
            lte: -20,
            color: '#1c16d3'
        }, {
            gt: -20,
            lte: -15,
            color: '#2e2bff'
        }, {
            gt: -15,
            lte: -10,
            color: '#418cff'
        }, {
            gt: -10,
            lte: -5,
            color: '#3cb1e3'
        }, {
            gt: -5,
            lte: 0,
            color: '#57f2ff'
        }, {
            gt: 0,
            lte: 5,
            color: '#68ffc6'
        }, {
            gt: 5,
            lte: 10,
            color: '#28ff7e'
        },{
            gt: 10,
            lte: 15,
            color: '#80ff45'
        }, {
            gt: 15,
            lte: 20,
            color: '#c3ff65'
        }, {
            gt: 20,
            lte: 25,
            color: '#ffde33'
        }, {
            gt: 25,
            lte: 30,
            color:  '#ff9933'
        }, {
            gt: 30,
            lte: 35,
            color: '#ff9933'
        }, {
            gt: 35,
            color: '#cc0033'
        }],
        outOfRange: {
            color: '#999'
        }
    },
    series: [{
        type:'line',
        markLine: {
            silent: true,
            data: [{
                yAxis: -35
            },{
                yAxis: -30
            },{
                yAxis: -25
            }, {
                yAxis: -20
            }, {
                yAxis: -15
            }, {
                yAxis: -10
            }, {
                yAxis: -5
            },{
                yAxis: 0
            },{
                yAxis: 5
            },{
                yAxis: 10
            },{
                yAxis: 15
            },{
                yAxis: 20
            }, {
                yAxis: 25
            }, {
                yAxis: 30
            }, {
                yAxis: 35
            }]
        }
    },{
        name: name_list[1],
        type: 'line',
        data: max_temp,
        markLine: {
            silent: true
        }
    },{
        name: name_list[2],
        type: 'line',
        data: min_temp,
        markLine: {
            silent: true
        }
    }]
};

myChart.setOption(option);
let MapSize = document.getElementById("line");
let MapWidth = MapSize.clientWidth||MapSize.offsetWidth;
MapContainer.style.width = MapWidth*0.9+'px';
MapContainer.style.height = MapWidth*0.3+'px';
myChart.resize();