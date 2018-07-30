$(document).ready(function () {


    const min = 2,
        max = 4,
        arr = [];
    cat = [];


    for (let i = 0; i < 50; i++) {
        arr.push(min + Math.random() * (max - min));
    }

    if ($('div').is("#article-chart")) {
        console.log($('#article-chart'));
    }

    if ($('div').is("#article-chart")) {
        Highcharts.chart('article-chart', {
            chart: {
                type: 'spline',
                width: 830,
                height: 300,
                marginTop: 30,
                marginBottom: 40,
                scrollablePlotArea: {
                }
            },
            title: {
                text: false,
            },
            subtitle: {
                text: false
            },
            xAxis: {
                type: 'datetime',
                tickInterval : 5*24 * 3600 * 1000,

                // tickInterval: 1
            },
            yAxis: {
                title: {
                    text: false,
                },
                labels: {
                    format: '{value} $'
                },
                // minorGridLineWidth: 0,
                // gridLineWidth: 0,
                alternateGridColor: null,

            },
            tooltip: {
                valueSuffix: ' $'
            },
            plotOptions: {
                spline: {
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    marker: {
                        enabled: false
                    },
                    pointInterval: 56400000, // one hour
                    pointStart: Date.UTC(2018, 4, 1, 0, 0, 0),
                    pointInInterval: 10,
                }
            },
            series: [{
                name: "Cyber Capital Fund",
                intervals: 10,
                color: "#4c6f8c",
                data: arr
                // [ 3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7]

            }],
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        });
    }
    Highcharts.chart('chart-container1', {
        chart: {
            type: 'spline',
            width: 650,
            height: 230,
            marginTop: 30,
            marginBottom: 40,
            scrollablePlotArea: {
            }
        },
        title: {
            text: false,
        },
        subtitle: {
            text: false
        },
        xAxis: {
            type: 'datetime',

            // tickInterval: 1
        },
        yAxis: {
            title: {
                text: false,
            },
            labels: {
                format: '{value} $'
            },
            // minorGridLineWidth: 0,
            // gridLineWidth: 0,
            alternateGridColor: null,

        },
        tooltip: {
            valueSuffix: ' $'
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 56400000, // one hour
                pointStart: Date.UTC(2018, 4, 1, 0, 0, 0),
                pointInInterval: 1,
            }
        },
        series: [{
            name: "Cyber Capital Fund",
            intervals: 2,
            color: "#4c6f8c",
            data: arr
            // [ 3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7]

        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
    Highcharts.chart('chart-container2', {
        chart: {
            type: 'spline',
            width: 650,
            height: 230,
            marginTop: 30,
            marginBottom: 40,
            scrollablePlotArea: {
            }
        },
        title: {
            text: false,
        },
        subtitle: {
            text: false
        },
        xAxis: {
            type: 'datetime',

            // tickInterval: 1
        },
        yAxis: {
            title: {
                text: false,
            },
            labels: {
                format: '{value} $'
            },
            // minorGridLineWidth: 0,
            // gridLineWidth: 0,
            alternateGridColor: null,

        },
        tooltip: {
            valueSuffix: ' $'
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 56400000, // one hour
                pointStart: Date.UTC(2018, 4, 1, 0, 0, 0),
                pointInInterval: 1,
            }
        },
        series: [{
            name: "Cyber Capital Fund",
            intervals: 2,
            color: "#4c6f8c",
            data: arr
            // [ 3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7]

        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
    Highcharts.chart('chart-container3', {
        chart: {
            type: 'spline',
            width: 650,
            height: 230,
            marginTop: 30,
            marginBottom: 40,
            scrollablePlotArea: {
            }
        },
        title: {
            text: false,
        },
        subtitle: {
            text: false
        },
        xAxis: {
            type: 'datetime',

            // tickInterval: 1
        },
        yAxis: {
            title: {
                text: false,
            },
            labels: {
                format: '{value} $'
            },
            // minorGridLineWidth: 0,
            // gridLineWidth: 0,
            alternateGridColor: null,

        },
        tooltip: {
            valueSuffix: ' $'
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 56400000, // one hour
                pointStart: Date.UTC(2018, 4, 1, 0, 0, 0),
                pointInInterval: 1,
            }
        },
        series: [{
            name: "Cyber Capital Fund",
            intervals: 2,
            color: "#4c6f8c",
            data: arr
            // [ 3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7]

        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
    Highcharts.chart('chart-container4', {
        chart: {
            type: 'spline',
            width: 650,
            height: 230,
            marginTop: 30,
            marginBottom: 40,
            scrollablePlotArea: {
            }
        },
        title: {
            text: false,
        },
        subtitle: {
            text: false
        },
        xAxis: {
            type: 'datetime',

            // tickInterval: 1
        },
        yAxis: {
            title: {
                text: false,
            },
            labels: {
                format: '{value} $'
            },
            // minorGridLineWidth: 0,
            // gridLineWidth: 0,
            alternateGridColor: null,

        },
        tooltip: {
            valueSuffix: ' $'
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 56400000, // one hour
                pointStart: Date.UTC(2018, 4, 1, 0, 0, 0),
                pointInInterval: 1,
            }
        },
        series: [{
            name: "Cyber Capital Fund",
            intervals: 2,
            color: "#4c6f8c",
            data: arr
            // [ 3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7]

        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
    Highcharts.chart('chart-container5', {
        chart: {
            type: 'spline',
            width: 650,
            height: 230,
            marginTop: 30,
            marginBottom: 40,
            scrollablePlotArea: {
            }
        },
        title: {
            text: false,
        },
        subtitle: {
            text: false
        },
        xAxis: {
            type: 'datetime',

            // tickInterval: 1
        },
        yAxis: {
            title: {
                text: false,
            },
            labels: {
                format: '{value} $'
            },
            // minorGridLineWidth: 0,
            // gridLineWidth: 0,
            alternateGridColor: null,

        },
        tooltip: {
            valueSuffix: ' $'
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 56400000, // one hour
                pointStart: Date.UTC(2018, 4, 1, 0, 0, 0),
                pointInInterval: 1,
            }
        },
        series: [{
            name: "Cyber Capital Fund",
            intervals: 2,
            color: "#4c6f8c",
            data: arr
            // [ 3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7]

        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
    Highcharts.chart('chart-container6', {
        chart: {
            type: 'spline',
            width: 650,
            height: 230,
            marginTop: 30,
            marginBottom: 40,
            scrollablePlotArea: {
            }
        },
        title: {
            text: false,
        },
        subtitle: {
            text: false
        },
        xAxis: {
            type: 'datetime',

            // tickInterval: 1
        },
        yAxis: {
            title: {
                text: false,
            },
            labels: {
                format: '{value} $'
            },
            // minorGridLineWidth: 0,
            // gridLineWidth: 0,
            alternateGridColor: null,

        },
        tooltip: {
            valueSuffix: ' $'
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 56400000, // one hour
                pointStart: Date.UTC(2018, 4, 1, 0, 0, 0),
                pointInInterval: 1,
            }
        },
        series: [{
            name: "Cyber Capital Fund",
            intervals: 2,
            color: "#4c6f8c",
            data: arr
            // [ 3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7]

        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
    Highcharts.chart('chart-container7', {
        chart: {
            type: 'spline',
            width: 650,
            height: 230,
            marginTop: 30,
            marginBottom: 40,
            scrollablePlotArea: {
            }
        },
        title: {
            text: false,
        },
        subtitle: {
            text: false
        },
        xAxis: {
            type: 'datetime',

            // tickInterval: 1
        },
        yAxis: {
            title: {
                text: false,
            },
            labels: {
                format: '{value} $'
            },
            // minorGridLineWidth: 0,
            // gridLineWidth: 0,
            alternateGridColor: null,

        },
        tooltip: {
            valueSuffix: ' $'
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 56400000, // one hour
                pointStart: Date.UTC(2018, 4, 1, 0, 0, 0),
                pointInInterval: 1,
            }
        },
        series: [{
            name: "Cyber Capital Fund",
            intervals: 2,
            color: "#4c6f8c",
            data: arr
            // [ 3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7]

        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
});





