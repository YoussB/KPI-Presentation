var adminSlide = function () {
    if (firstSlide.currentPercent >= firstSlide.thresholdPercent) {
        $('#COAThreshold').css('background-color', 'green');
    } else {
        $('#COAThreshold').css('background-color', 'red');
    }
    $('#s1BoxValue').text(firstSlide.boxValue);
    var flight = getNextflight();
    $('#remTime').text('00:00');
    if (flight.length == 1) {
        $('#flightNo').text(flight[0].name);
        $('#flightArrivalTemp').text(flight[0].arrival);
        $('#flightArrival').hide();
        $('#flightNoTemp').hide();
    } else {
        $('#flightNo').text(flight[0].name);
        $('#flightNoTemp').text(flight[1].name);
        $('#flightArrival').text(flight[0].arrival);
        $('#flightArrivalTemp').hide();
    }
    currentTimer = window.setInterval(timer, 1000);
};
var alarm1Playing, alarm2Playing;
var timer = function () {
    var arrival = $('#flightArrival').css('display') == 'none' ? $('#flightArrivalTemp').text().split(':') : $('#flightArrival').text().split(':');
    var now = new Date(Date.now());
    arrival = new Date(now.getFullYear(), now.getMonth(), now.getDate(), arrival[0], arrival[1], 0, 0);
    var minutesToArrival = (arrival.getTime() - now.getTime()) / 60000;
    var zeroAlarm = null;
    var firstAlarm = null;
    var secondAlarm = null;

    if (firstSlide.alarm1 == 0 || firstSlide.alarm2 == 0) {
        var zeroAlarm = true;
        var alarmFile = firstSlide.alarm1 == 0 ? firstSlide.alarm1File : firstSlide.alarm2File;
    }
    if (firstSlide.alarm1 > 0) {
        var firstAlarm = firstSlide.alarm1;
    }
    if (firstSlide.alarm2 > 0) {
        var secondAlarm = firstSlide.alarm2;
    }
    if (minutesToArrival > 0) {
        var countDown = MillisecondsToDuration(arrival.getTime() - now.getTime());
        countDown = countDown.substring(2, countDown.length).split('.')[0];
        $('#remTime').text(countDown);
        if (!alarm1Playing && firstAlarm && parseInt(minutesToArrival) == firstAlarm) {
            alarm1Playing = true;
            var audio = new Audio(firstSlide.alarm1File);
            audio.play();
            window.setTimeout(function () {
                try {
                    audio.pause();
                } catch (ex) { }
                try {
                    audio.currentTime = 0;
                } catch (ex) { }
            }, 20000);
        }
        if (!alarm2Playing && secondAlarm && parseInt(minutesToArrival) == secondAlarm) {
            alarm2Playing = true;
            var audio = new Audio(firstSlide.alarm2File);
            audio.play();
            window.setTimeout(function () {
                try {
                    audio.pause();
                } catch (ex) { }
                try {
                    audio.currentTime = 0;
                } catch (ex) { }
            }, 20000);
        }
    } else if (minutesToArrival >= -1 && minutesToArrival <= 0) {
        if (currentTimer) {
            window.clearInterval(currentTimer);
        }
        if (zeroAlarm) {
            var audio = new Audio(alarmFile);
            audio.play();
            window.setTimeout(function () {
                try {
                    audio.pause();
                } catch (ex) { }
                try {
                    audio.currentTime = 0;
                } catch (ex) { }
            }, 20000);
        }
        var flight = getNextflight();
        $('#remTime').text('00:00');
        if (flight.length == 1) {
            $('#flightNo').text(flight[0].name);
            $('#flightArrivalTemp').text(flight[0].arrival);
            $('#flightArrival').hide();
            $('#flightNoTemp').hide();
        } else {
            $('#flightNo').text(flight[0].name);
            $('#flightNoTemp').text(flight[1].name);
            $('#flightArrival').text(flight[0].arrival);
            $('#flightArrivalTemp').hide();
        }
        var currentTimer = window.setInterval(timer, 1000);
    } else if (minutesToArrival < -2) {
        arrival = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, arrival.getHours(), arrival.getMinutes(), 0, 0);
        var countDown = MillisecondsToDuration(arrival.getTime() - now.getTime());
        countDown = countDown.substring(2, countDown.length).split('.')[0];
        $('#remTime').text(countDown);
    }
};
//Convert duration from milliseconds to 0000:00:00.00 format
function MillisecondsToDuration(n) {
    var hms = "";
    var dtm = new Date();
    dtm.setTime(n);
    var h = "000" + Math.floor(n / 3600000);
    var m = "0" + dtm.getMinutes();
    var s = "0" + dtm.getSeconds();
    var cs = "0" + Math.round(dtm.getMilliseconds() / 10);
    hms = h.substr(h.length - 4) + ":" + m.substr(m.length - 2) + ":";
    hms += s.substr(s.length - 2) + "." + cs.substr(cs.length - 2);
    return hms;
}

var getNextflight = function () {
    var now = new Date(Date.now());
    var current = [];
    var flights = firstSlide.events;
    $.each(flights, function (index, value) {
        if (current.length < 1) {
            var arrival = value.arrival.split(':');
            arrival = new Date(now.getFullYear(), now.getMonth(), now.getDate(), arrival[0], arrival[1], 0, 0);
            if (arrival.getTime() - now.getTime() > 0) {
                current.push(value);
            }
        } else if (current[0].arrival == value.arrival) {
            current.push(value);
            return false;
        }
    });
    if (current.length < 1) {
        current.push(flights[0]);
        if (flights[1].arrival == current[0].arrival) {
            current.push(flights[0]);
        }
    }
    return current;
}

var bosSlide = function () {
    //Chart Bootstrap
    $('#s2BoxTitle').text(secondSlide.boxTitle);
    $('#s2Caption').text(secondSlide.captionData);
    $('#heldShips').text(secondSlide.BoxValue);
    var ctx = document.getElementById("chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
    var remaining = 0;
    var resources = secondSlide.resources;
    if ($('#tmPrgrs tr:first td:first').text() == 'Name') {
        $.each(resources, function (index, value) {
            var tempRow = $('<tr />').insertBefore($('#tmPrgrs tr:last'));
            console.log(value);
            tempRow.append($('<td />').text(value.name));
            tempRow.append($('<td />').text(value.remaining));
            remaining += value.remaining;
        });
        $('#tmPrgrs tr:first').remove();
        $('#totalAging').text(remaining);
        if (chartConfigurations.data[chartConfigurations.data.length - 1] < chartConfigurations.threshold.value) {
            $('#bosColor').css('background-color', 'green');
        } else {
            $('#bosColor').css('background-color', 'red');
        }
    }
};

var bayanSlide = function () {
    if (!$.fn.dataTable.isDataTable('#agentProgress')) {
        $('#agentProgress').DataTable({
            data: dtData,
            columns: dtColumns,
            ordering: false,
            searching: false,
            lengthChange: false,
            footerCallback: function (tfoot, data, start, end, display) {
                var api = this.api();
                $(api.column(5).footer()).html(
                    api.column(5).data().reduce(function (a, b) {
                        return a + b;
                    }, 0)
                );
            }
        });
    }
};
var bayanAgentProgressNew = function () {
    $('#s4TopBoxTitle').text(fourthSlide.topBoxTitle);
    $('#s4TopBoxText').text(fourthSlide.topBoxValue);
    $('#s4BottomBoxTitle').text(fourthSlide.bottomBoxTitle);
    $('#s4BottomBoxText').text(fourthSlide.bottomBoxValue);
    var barChartConfigurations = fourthSlide.chartConfigurations;
    barChartConfigurations.xAxis.points = [];
    var barDataArray = [];
    var max = 0;
    $.each(barChartConfigurations.data, function (key, value) {
        barChartConfigurations.xAxis.points.push(key);
        barDataArray.push(value);
        max = value > max ? value : max;
    });

    barChartConfigurations.data = barDataArray;
    barChartConfigurations.yAxis.max = barChartConfigurations.yAxis.max > max ? barChartConfigurations.yAxis.max : max + barChartConfigurations.yAxis.step;
    var barConfig = {
        type: 'bar',
        data: {
            labels: barChartConfigurations.xAxis.points,
            datasets: [{
                label: barChartConfigurations.chartLabel,
                data: barChartConfigurations.data,
                //fill: true,
                borderDash: [5, 5],
                backgroundColor: "rgba(0,0,0,0.8)"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
            },
            hover: {
                mode: 'label'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: barChartConfigurations.xAxis.label
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: barChartConfigurations.yAxis.label
                    },
                    ticks: {
                        max: barChartConfigurations.yAxis.max,
                        min: barChartConfigurations.yAxis.min,
                        stepSize: barChartConfigurations.yAxis.step
                    }
                }]
            },
            title: {
                display: true,
                text: barChartConfigurations.chartLabel
            }
        }
    };
    var ctx = document.getElementById("barChart").getContext("2d");
    window.myLine = new Chart(ctx, barConfig);
};
var randomScalingFactor = function () {
    return Math.round(Math.random() * 4);//* (Math.random() > 0.5 ? -1 : 1));
};
var randomColorFactor = function () {
    return Math.round(Math.random() * 255);
};
var randomColor = function (opacity) {
    return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};

var perfectArr = [];
var chartConfigurations = secondSlide.chartConfigurations;
$.each(chartConfigurations.xAxis.points, function (i, label) {
    perfectArr.push(chartConfigurations.threshold.value);
});


var config = {
    type: 'line',
    data: {
        labels: chartConfigurations.xAxis.points,
        datasets: [{
            label: chartConfigurations.chartLabel,
            data: chartConfigurations.data,
            fill: false,
            borderDash: [5, 5],
            backgroundColor: "rgba(0,0,0,0.8)"
        }, {
            label: chartConfigurations.threshold.label,
            data: perfectArr,
            fill: false,
            radius: 0,
            backgroundColor: "rgba(255,0,0,0.8)"
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: chartConfigurations.xAxis.label
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: chartConfigurations.yAxis.label
                },
                ticks: {
                    max: chartConfigurations.yAxis.max,
                    min: chartConfigurations.yAxis.min,
                    stepSize: chartConfigurations.yAxis.step
                }
            }]
        },
        title: {
            display: true,
            text: chartConfigurations.chartLabel
        }
    }
};

var dtColumns = [];
var agentsProgressResources = thirdSlide.agentsProgressResources;
var agentsProgressData = thirdSlide.agentsProgressData;
$.each(agentsProgressResources, function (i, column) {
    var temp = { 'title': column };
    dtColumns.push(temp);
});

var dtData = [];
$.each(agentsProgressData, function (i, value) {
    var tempTotal = 0;
    for (var i = 1; i < agentsProgressResources.length - 2; i++) {
        tempTotal += value[i];
    }
    value[agentsProgressResources.length - 2] = tempTotal;
    dtData.push(value);
});

$.each(config.data.datasets, function (i, dataset) {
    var background = 'rgba(0,0,0,0.6)';
    if (dataset.backgroundColor) {
        dataset.borderColor = dataset.backgroundColor;
        dataset.backgroundColor = dataset.backgroundColor;
        dataset.pointBorderColor = dataset.backgroundColor;
        dataset.pointBorderWidth = 1;
    }
});
