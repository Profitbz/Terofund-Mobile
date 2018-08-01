$(document).ready(function () {

    const initialWidth = $('.main-container').width();


    var isOpened = true;

    console.log($(document).width());

    if ($(document).width() < 767) {
        var lineChart = Highcharts.chart('programmChart', {
            chart: {
                type: 'areaspline'
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
                    "12/03",
                    '13/03',
                    '14/03',
                    '15/03',
                    '16/03',
                    '17/03',
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
                        fontFamily: 'Core Sans G, sans-serif',
                        fontWeight: 'normal'
                    }
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: false,
                gridLineWidth: 0
            },

            tooltip: {
                formatter: function () {
                    return   this.y + ' %';
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
                    lineWidth: 3,
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
                data: [4, 7, 3, 8, 3, 7, 3, 6, 8 ]
            }],
        });
    } else {
        var lineChart = Highcharts.chart('programmChart', {
            chart: {
                type: 'areaspline'
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
                    "12/03",
                    '13/03',
                    '14/03',
                    '15/03',
                    '16/03',
                    '17/03',
                    '18/03',
                    ""

                ],
                tickWidth: 0,
                labels: {
                    useHTML:true,
                    align: 'center',
                    y:20,
                    style: {
                        fontSize: '20px',
                        color:'rgba(145, 155, 176, 0.5)',
                        fontFamily: 'Core Sans G, sans-serif',
                        fontWeight: 'normal'
                    }
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: false,
                gridLineWidth: 0
            },

            tooltip: {
                padding: 20,
                style: {
                  fontSize: 20
                },
                formatter: function () {
                    return   this.y + ' %';
                }
            },

            plotOptions: {
                area: {
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                },
                series: {
                    lineColor: "#304FFE",
                    lineWidth: 6,
                    marker: {
                        fillColor: '#304FFE',
                        lineColor: "#304FFE",
                        radius: 12,
                        states: {
                            hover: {
                                fillColor: '#FF3C54',
                                radius: 10,
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
                data: [4, 7, 3, 8, 3, 7, 3, 6, 8 ]
            }],
        });
    }





    $('.aside-btn').click(function () {
        if ($(document).width() > 1024) {
            console.log('resize');
            if (isOpened) {
                lineChart.setSize(initialWidth * 0.98, 280);
                isOpened = false;
            } else {
                lineChart.setSize(initialWidth * 1.2, 280);
                isOpened = true;
            }
        }
    });
});