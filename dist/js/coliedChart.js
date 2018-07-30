$(document).ready(function () {
let  spacing;
    if ($(document).width() < 1200) {
       spacing = 60;
    } else {
        spacing = 52;
    }

    var isOpened = true;

    var lineChart1 = Highcharts.chart('coliedChart', {
        chart: {
            type: 'column',
            spacingTop: spacing
        },
        title: {
            text: ' '
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            allowDecimals: false,
            categories: [
                "Jan/18",
                "Feb/18",
                "Mar/18",
                "Apr/18",
                "May/18",
                "Jun/18",
                "Jul/18",
                "Aug/18",
                "Sep/18",
                "Oct/18",
                "Nov/18",
                "Dec/18",

            ],
            tickWidth: 0,
            labels: {
                useHTML:true,
                align: 'center',
                y:20,
                style: {
                    fontSize: '12px',
                    color:'rgba(145, 155, 176, 0.5)',
                    fontFamily: 'Core Sans, sans-serif',
                    fontWeight: 'normal'
                },
                rotation: 0
            }
        },
        yAxis: {
            opposite: true,
            title: false,
            labels: false,
            gridLineWidth: 0
        },

        tooltip: false,
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            },
            series: {
                lineColor: "#304FFE",
                lineWidth: 2,
                pointPadding: 0.2,
                groupPadding: 0.1,
                marker: {
                    fillColor: '#304FFE',
                    lineColor: "#304FFE",
                    states: {
                        hover: {
                            fillColor: '#FF3C54',
                            radius: 8,
                            lineColor: 'white',
                            lineWidth: 3
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    color: "#919BB0",
                    style: {
                        fontSize: 10,
                        fontWeight: "normal"
                    },
                    allowOverlap: true,
                    crop: false,
                    padding: 15
                },
                point: {
                    events: {
                        mouseOver: function() {
                            $('.highcharts-axis-labels span').eq(this.x).addClass('active');
                        },
                        mouseOut: function() {
                            $('.highcharts-axis-labels span').eq(this.x).removeClass('active');
                        }
                    }
                }
            }

        },
        series: [{
            data: [22.9, 9.9, 9.9, 12.5, 44.9, -12.9, 35.5, 17.5, 22.5, 32.9, 55.5, -22.9],
            color: "#304FFE"
        },
            {
                data: [14.9, 5.9, 14.5, 12.5, 6.9, -10.9, 22.5, 9.9, 25, 25.9, 15.9, -17.9],
                color: "#FF3C54"
            }]
    });


    $('.aside-btn').click(function () {
        if ($(document).width() > 1024) {
            if (isOpened) {
                lineChart1.setSize(900, 400);
                isOpened = false;
            } else {
                lineChart1.setSize(1100, 400);
                isOpened = true;
            }
        }

    });


});