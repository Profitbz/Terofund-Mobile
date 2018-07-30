$(function() {
    // Create the chart



    var donutChart = Highcharts.chart('donut', {
        chart: {
            type: 'pie',
            margin: 40,
        },
        credits: false,
        exporting: false,
        title: false,
        tooltip: false,
        plotOptions: {
            pie: {
                shadow: {
                    color: "rgba(0,56,104,0.5)"
                },
                colors: [ "#1A37D8", "#324BDA", "#4A60DD", "#6275E1", "#7A8AE3", "#929FE6", "#C2C9ED",  "#D6DAF6", "#D9DDF7", "#E4E7F8"],
                slicedOffset: 20,
                borderWidth: 5,
                states: {
                    hover: false
                }
            },
            series: {
                allowPointSelect: false,
                stickyTracking: false,

                events: {
                    mouseOut: function(event) {
                        // unslice sliced element(s)

                        for (var key in this.points) {
                            if (this.points[key].sliced) {
                                this.points[key].slice(false);
                            }
                        }
                    }
                }
            }
        },
        series: [
            {
                name: '',
                data: [{name: "Bitcoin", y: 21.3},["Ethereum",15.3],["Tether USD", 13.8],["Wawes", 15], ["Qtum", 15.3],
                     ["Cindicator", 10.2], ["", 1.8],  ["", 1.8],  ["", 4.4], ["", 3.4]],
                size: '120%',
                innerSize: '50%',
                dataLabels: {
                    color: 'transparent',
                },
                animation: {
                    duration: 1500
                },
                point: {
                    events: {
                        mouseOver: function() {
                            this.options.oldColor = this.color;
                            this.graphic.attr("fill", "#FF3C54");

                            this.dataLabel.css({
                                color: "#919BB0"
                            });

                            $('#donut .highcharts-point')[this.index].setAttribute('stroke','');

                            $('.donut-summary')[this.index].classList.add('hover');


                            this.connector.element.classList.add('isVisible');

                            var point = this,
                                points = this.series.points;

                            // unslice sliced element(s)
                            for (var key in points) {
                                if (points[key].sliced) {
                                    points[key].slice(false);
                                }
                            }

                            // slice hovered element
                            if (!point.selected) {
                                point.slice(true);
                            }
                        },
                        mouseOut: function () {
                            this.graphic.attr("fill", this.options.oldColor);
                            this.dataLabel.css({
                                color: "transparent"
                            });

                            if (localStorage.getItem('pageColor') === "dark") {
                                $('#donut .highcharts-point')[this.index].setAttribute('stroke','#202749');


                            } else if (localStorage.getItem('pageColor') === "white") {
                                $('#donut .highcharts-point')[this.index].setAttribute('stroke','#fff');
                            }



                            $('.donut-summary')[this.index].classList.remove('hover');
                        }
                    }
                },
                states: {
                    hover: {
                        halo: {
                            size: 0
                        },
                    }
                }
            }
        ]
    });

    $('.donut-summary').addClass('active');

    var isStrated = true;

    if (isStrated) {
        setTimeout(function () {
            donutChart.series[0].points[0].oldColor = donutChart.series[0].points[0].color;
            donutChart.series[0].points[0].slice(true);
            donutChart.series[0].points[0].graphic.attr("fill", "#FF3C54");
            donutChart.series[0].points[0].dataLabel.css({
                color: "#919BB0"
            });
            $('.donut-summary')[0].classList.add('hover');

            $('.donut-summary').each(function (i, item) {
                item.addEventListener('mouseout', function () {
                    donutChart.series[0].points[0].slice(false);
                    donutChart.series[0].points[0].graphic.attr("fill", donutChart.series[0].points[0].oldColor);
                    donutChart.series[0].points[0].dataLabel.css({
                        color: "transparent"
                    });
                    $('.donut-summary')[0].classList.remove('hover');
                });

                isStrated = false;
            });

            $('#donut .highcharts-point').each(function (i, item) {
                item.addEventListener('mouseout', function () {
                    donutChart.series[0].points[0].slice(false);
                    donutChart.series[0].points[0].graphic.attr("fill", donutChart.series[0].points[0].oldColor);
                    donutChart.series[0].points[0].dataLabel.css({
                        color: "transparent"
                    });
                    $('.donut-summary')[0].classList.remove('hover');
                });

                isStrated = false;
            });
        }, 1500);
    }

    $('.donut-summary').each(function (i, item) {
       item.addEventListener('mouseover', function () {
           donutChart.series[0].points[i].oldColor = donutChart.series[0].points[i].color;
           donutChart.series[0].points[i].slice(true);
           donutChart.series[0].points[i].graphic.attr("fill", "#FF3C54");
           donutChart.series[0].points[i].dataLabel.css({
               color: "#919BB0"
           });
       });
    });

    $('.donut-summary').each(function (i, item) {
        item.addEventListener('mouseout', function () {
            donutChart.series[0].points[i].slice(false);
            donutChart.series[0].points[i].graphic.attr("fill", donutChart.series[0].points[i].oldColor);
            donutChart.series[0].points[i].dataLabel.css({
                color: "transparent"
            });
        });
    });

    $('.aside-btn').click(function () {
        console.log(localStorage.getItem('pageColor'));
        if (localStorage.getItem('pageColor') === "dark") {

            $('#donut .highcharts-point').each(function (i, item) {
                item.setAttribute('stroke','#202749');
            });

        } else if (localStorage.getItem('pageColor') === "white") {
            $('#donut .highcharts-point').each(function (i, item) {
                item.setAttribute('stroke','#fff');
            });
        }
    });

    if (localStorage.getItem('pageColor') === "dark") {

        $('#donut .highcharts-point').each(function (i, item) {
            item.setAttribute('stroke','#202749');
        });

    } else if (localStorage.getItem('pageColor') === "white") {
        $('#donut .highcharts-point').each(function (i, item) {
            item.setAttribute('stroke','#fff');
        });
    }
});






