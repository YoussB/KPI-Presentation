//General Configurations:

//the footer image for the slides can be configured in the folder images
//change the file slideFooter.png to any png file with the same name.
//preferable a file that is 1600*250 pixels

var generalConfig = {
    //Transition time between slides (in minutes).
    transitionTime: 5
};

//Configurations for the first Slide:
var firstSlide = {
    //show/hide the slide
    show: true,
    //Value for the top right box.
    boxValue: 'COA 15%',
    thresholdPercent: 82,
    currentPercent: 15,
    //alarm times in minutes (0 means at the time of the event)
    //alarm sounds can be configured in the folder (audio)
    //use any mp3 files with the titles: alarm1.mp3 and alarm2.mp3
    alarm1: 30,
    alarm1File: 'audio/alarm1.mp3',
    alarm2: 0,
    alarm2File: 'audio/alarm2.mp3',
    //Add as much events as you need.
    //up to two 2 events having the same time.
    //an alarm will fire whenever the even is due.
    //Please sort the events by date/time Ascending.
    events: {
        0: {
            id: 1,
            name: "QR008-LHR",
            arrival: "00:00"
        },
        1: {
            id: 2,
            name: "QR1083-KWI",
            arrival: "00:00"
        },
        2: {
            id: 3,
            name: "QR1015-DXB",
            arrival: "01:30"
        },
        3: {
            id: 4,
            name: "EK847-DXB",
            arrival: "03:30"
        },
        4: {
            id: 5,
            name: "DHX140-BAH",
            arrival: "06:30"
        },
        5: {
            id: 6,
            name: "GF522-BAH",
            arrival: "08:30"
        },
        6: {
            id: 7,
            name: "EK851-DXB",
            arrival: "11:34"
        },
        7: {
            id: 8,
            name: "DHX140-BAH",
            arrival: "13:30"
        },
        8: {
            id: 9,
            name: "QR006-LHR",
            arrival: "19:00"
        },
        9: {
            id: 10,
            name: "QR068-FRA",
            arrival: "21:30"
        },
        10: {
            id: 11,
            name: "BA125-LHR",
            arrival: "22:00"
        },
        11: {
            id: 12,
            name: "BA125-BAH",
            arrival: "22:30"
        }
    }
};
//Configurations for the Second Slide:
var secondSlide = {
    //show/hide the slide
    show: true,
    //title & value for the box appearing in the upper right corner of the slide.
    boxTitle: "Held Shipments as of 27 Nov.",
    BoxValue: 191,
    //edit the resources and data shown on the left.
    // due to size, it is preferable to add only 10 resources
    // name: shown on the left side of the table.
    // remaining: shown on the right side of the table.
    resources: {
        0: {
            name: "Arriane",
            remaining: 0.05
        },
        1: {
            name: "Habib",
            remaining: 0.5
        },
        2: {
            name: "Ariel",
            remaining: 0
        },
        3: {
            name: "john",
            remaining: 5
        },
        4: {
            name: "Fazan",
            remaining: 50
        },
        5: {
            name: "Kiren",
            remaining: 500
        },
        6: {
            name: "Sameh",
            remaining: 5000
        },
        7: {
            name: "Kiren",
            remaining: 5000
        },
        8: {
            name: "Noshad",
            remaining: 5000
        },
        9: {
            name: "Hamdy",
            remaining: 5000
        }
    },
    //Control whether the total field in the resources table is shown or not.
    showTotal: true,
    //control what data to show in the bottom caption
    captionData: "BOS : 4.7",
    //Control all the slide 2 chart configurations
    //N.B the threshold of the chart and the last data entry determine the color of the caption.
    // if the last data entry is >= the threshold then the color will be green.
    // else the caption color will be red.
    chartConfigurations: {
        //Legend is shown above the chart
        legend: "Chart Legend",
        //Label is shown below the chart
        chartLabel: "Chart Label",
        //line threshold
        threshold: {
            value: 4.7,
            label: "KPI",
        },
        //x-axis configurations
        //Leave label empty to hide
        xAxis: {
            label: "x label",
            points:
            ["01-Jul", "02-Jul", "03-Jul", "04-Jul", "05-Jul", "06-Jul", "07-Jul", "08-Jul", "09-Jul", "10-Jul", "11-Jul", "12-Jul", "13-Jul", "14-Jul", "15-Jul",
                "16-Jul", "17-Jul", "18-Jul", "19-Jul", "20-Jul", "21-Jul", "22-Jul", "23-Jul", "24-Jul", "25-Jul", "26-Jul", "27-Jul", "28-Jul", "29-Jul", "30-Jul", "31-Jul"],
        },
        //Data to be added Daily
        //Each data entry represents the corresponding point in the xAxis.points array.
        data: [2, 4, 5, 2.3, 3.2, 5, 5.6, 4, 5, 2.3, 3.2, 5, 5.6, 4, 5, 2.3, 3.2, 5, 5.6, 4, 5, 2.3, 3.2, 5, 5.6, 3.2, 5, 2.6, 5.6],
        //y-axis configurations
        //Leave label empty to hide
        yAxis: {
            label: "",
            min: 2,
            max: 6,
            step: 0.2
        }
    }
};
//Configurations for the Third Slide:
var thirdSlide = {
    //show/hide the slide
    show: false,
    agentsProgressResources: [
        'Day',
        'Aymen', 'A.Salih', 'A.Elsayed', 'Zaghlol', 'Sharaf', 'Imbarez', 'Mawdoudy', 'Nahas', 'Sayeed', 'Amr',
        'Total', 'Error'
    ],
    agentsProgressData: [
        ['01-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['02-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['03-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['04-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['05-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['06-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['07-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['08-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['09-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['10-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['11-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['12-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['13-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['14-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['15-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['16-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['17-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['18-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['19-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['20-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['21-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['22-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['23-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['24-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['25-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['26-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['27-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['28-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['29-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
        ['30-Nov', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Total', 5],
    ]
};
//Configurations for the Third Slide:
var fourthSlide = {
    //show/hide the slide
    show: true,
    //title & value for the box appearing in the upper right corner of the slide.
    topBoxTitle: "Number of Errors as of 07 Dec:",
    topBoxValue: 191,
    //title & value for the box appearing in the lower right corner of the slide.
    bottomBoxTitle: "Message:",
    bottomBoxValue: "the Good Mind is in the good body, don't forget to go to gym everyday 3ashan mtet3absh :D",
    
    //Control all the slide 4 chart configurations
    chartConfigurations: {
        //Legend is shown above the chart
        legend: "Chart Legend",
        //Label is shown below the chart
        chartLabel: "Bar Chart Label",
        //Data to be added Daily
        //You can use simple math in the data like the first one
        data: {
            //in Aymen it will show 14
            "Aymen": 2+12,
            "A.Salih": 20,
            "A.Elsayed": 10,
            "Zaghlol": 5,
            "Sharaf": 1,
            "Imbarez": 0,
            "Mawdoudy": 60,
            "Nahas": 2,
            "Sayeed": 13,
            "Amr": 25
        },
        //x-axis configurations
        //Leave label empty to hide
        xAxis: {
            label: "x label"
        },
        //y-axis configurations
        //Leave label empty to hide
        yAxis: {
            label: "",
            min: 0,
            max: 10,
            step: 1
        }
    }
};