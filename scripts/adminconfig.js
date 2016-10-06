var resources = {
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
    }
};

var flights = {
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
        arrival: "13:00"
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
};

var chartConfigurations = {
    //Legend is shown above the chart
    legend: "Chart Legend",

    //Label is shown below the chart
    chartLabel: "Help Shipment KPI",

    //line threshold
    threshold: {
        value: 4.7,
        label: "KPI",
    },

    //x-axis configurations
    //Leave label empty to hide
    xAxis: {
        label: "x label",
        points: ["01-Jul", 
                 "02-Jul", 
                 "03-Jul", 
                 "04-Jul", 
                 "05-Jul", 
                 "06-Jul", 
                 "07-Jul", 
                 "08-Jul", 
                 "09-Jul", 
                 "10-Jul", 
                 "11-Jul", 
                 "12-Jul", 
                 "13-Jul", 
                 "14-Jul", 
                 "15-Jul", 
                 "16-Jul", 
                 "17-Jul", 
                 "18-Jul", 
                 "19-Jul", 
                 "20-Jul", 
                 "21-Jul", 
                 "22-Jul", 
                 "23-Jul", 
                 "24-Jul", 
                 "25-Jul", 
                 "26-Jul", 
                 "27-Jul", 
                 "28-Jul", 
                 "29-Jul", 
                 "30-Jul", 
                 "31-Jul"],
    },

    //y-axis configurations
    //Leave label empty to hide
    yAxis: {
        label: "",
        min: 2,
        max: 6,
        step: 0.2
    },

    //Data to be added Daily
    data: [2, 4, 5, 2.3, 3.2, 5, 5.6, 4, 5, 2.3, 3.2, 5, 5.6, 4, 5, 2.3, 3.2, 5, 5.6, 4, 5, 2.3, 3.2, 5, 5.6, 3.2, 5, 5.6]
};