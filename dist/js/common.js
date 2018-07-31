$(document).ready(function() {

    Highcharts.chart('chart1', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#FF3C54"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(255, 60, 84, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#FF3C54",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart2', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#304FFE"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(48, 79, 254, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#304FFE",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart3', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#FF3C54"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(255, 60, 84, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#FF3C54",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart4', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#FF3C54"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(255, 60, 84, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#FF3C54",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart5', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#304FFE"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(48, 79, 254, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#304FFE",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart6', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#FF3C54"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(255, 60, 84, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#FF3C54",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart7', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#FF3C54"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(255, 60, 84, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#FF3C54",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart8', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#304FFE"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(48, 79, 254, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#304FFE",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart9', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#FF3C54"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(255, 60, 84, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#FF3C54",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart10', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#FF3C54"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(255, 60, 84, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#FF3C54",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart11', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#304FFE"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(48, 79, 254, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#304FFE",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

    Highcharts.chart('chart12', {

        chart: {
            type: 'solidgauge',
            height: '110%',
            backgroundColor: 'none',
            events:{
                load: function() {
                    var chart = this,
                        series = chart.series[0],
                        shadowPoint = series.data[0];

                    shadowPoint.graphic.shadow({
                        width: 8,
                        color: "#FF3C54"
                    },series.group,false)

                }
            }
        },

        title: {
            text: ' '
        },

        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{
                outerRadius: '95%',
                innerRadius: '70%',
                backgroundColor: "rgba(255, 60, 84, 0.2)",

                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: ' ',
            data: [{
                color: "#FF3C54",
                radius: '100%',
                innerRadius: '70%',
                y: 75
            }]
        }]
    });

});
