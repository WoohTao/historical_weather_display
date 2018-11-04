/**
 * Created by hongtao_wang on 2017/04/11.
 */


//var echarts = require('echarts');

$.get('assets/data/china.json', function (chinaJson) {

    echarts.registerMap('china', chinaJson); // 注册地图

    var mapChart = echarts.init(document.getElementById('map-wrap'));

    var option = {
        geo: {
            map: 'china'
        }
    }

    mapChart.setOption(option);

});