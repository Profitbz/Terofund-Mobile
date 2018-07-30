$(document).ready(function () {

    const initialWidth = $('.main-container').width();
    console.log(initialWidth)

    var isOpened = true;

    var lineChart1 = Highcharts.chart('investReportChart1', {
        chart: {
            type: 'area',
            spacingLeft: -30,
            spacingRight: 40
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
                "",
                "",
                "",
                "12/03",
                "",
                "",
                '13/03',
                "",
                "",
                '14/03',
                "",
                "",
                '15/03',
                "",
                "",
                '16/03',
                "",
                "",
                '17/03',
                "",
                "",
                '18/03',
                ""

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
            title: {
                text: ''
            },
            labels: {
                align: "left",
                style: {
                    fontFamily: "Core Sans",
                    fontSize: 12,
                    fontWeight: "normal",
                    color:'rgba(145, 155, 176, 0.5)'
                },
                format: "{value}"
            },
            gridLineWidth: 0
        },

        tooltip: {
            formatter: function () {
                return   this.y + ' USD';
            }
        },
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
            name: ' ',
            data: [25000, 35000, 20000, 30000, 60000, 34000, 65000, 65000, 40000, 11000, 50000, 60000, 10000, 55000, 38000, 11000, 35000, 55000, 18000, 25000, 60000, 45000, 30000 ]
        }]
    });
    var lineChart2 = Highcharts.chart('investReportChart2', {
        chart: {
            type: 'area',
            spacingLeft: -30,
            spacingRight: 40
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
                "",
                "",
                "",
                "12/03",
                "",
                "",
                '13/03',
                "",
                "",
                '14/03',
                "",
                "",
                '15/03',
                "",
                "",
                '16/03',
                "",
                "",
                '17/03',
                "",
                "",
                '18/03',
                ""

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
            title: {
                text: ''
            },
            labels: {
                align: "left",
                style: {
                    fontFamily: "Core Sans",
                    fontSize: 12,
                    fontWeight: "normal",
                    color:'rgba(145, 155, 176, 0.5)'
                },
                format: "{value}"
            },
            gridLineWidth: 0
        },

        tooltip: {
            formatter: function () {
                return   this.y + ' USD';
            }
        },
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
                lineColor: "#FF3C54",
                lineWidth: 2,
                marker: {
                    fillColor: '#304FFE',
                    lineColor: "#304FFE",
                    states: {
                        hover: {
                            fillColor: '#304FFE',
                            radius: 8,
                            lineColor: 'white',
                            lineWidth: 3
                        }
                    }
                },
                point: {
                    events: {
                        mouseOver: function() {
                            $('.investReport-chart__second .highcharts-axis-labels span').eq(this.x).addClass('active');
                        },
                        mouseOut: function() {
                            $('.investReport-chart__second .highcharts-axis-labels span').eq(this.x).removeClass('active');
                        }
                    }
                }
            }

        },
        series: [{
            name: ' ',
            data: [25000, 35000, 20000, 30000, 60000, 34000, 65000, 65000, 40000, 11000, 50000, 60000, 10000, 55000, 38000, 11000, 35000, 55000, 18000, 25000, 60000, 45000, 30000 ]
        }]
    });

    $('.aside-btn').click(function () {
        if ($(document).width() > 1024) {
            if (isOpened) {
                lineChart1.setSize(initialWidth * 0.8, 280);
                lineChart2.setSize(initialWidth * 0.8, 280);
                isOpened = false;
            } else {
                lineChart1.setSize(initialWidth * 1, 280);
                lineChart2.setSize(initialWidth * 1, 280);
                isOpened = true;
                console.log(initialWidth * 1);
            }
        }

    });
});