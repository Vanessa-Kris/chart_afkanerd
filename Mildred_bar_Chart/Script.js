// My data
// My data arr
const entry = [{
    Month: 'Days',
    Orange: 'Orange subscribers',
    Camtel: 'Camtel Subscribers',
    MTN: 'MTN Subscribers',
    Nextel: 'Nextel'
},
{
    Month: 'Day1',
    Orange: 20,
    Camtel: 31,
    MTN: 0,
    Nextel: 10
},
{
    Month: 'Day2',
    Orange: 40,
    Camtel: 19,
    MTN: 80,
    Nextel: 30
},
{
    Month: 'Day3',
    Orange: 50,
    Camtel: 31,
    MTN: 100,
    Nextel: 20
},
{
    Month: 'Day4',
    Orange: 50,
    Camtel: 16,
    MTN: 73,
    Nextel: 31
},
{
    Month: 'Day5',
    Orange: 22,
    Camtel: 61,
    MTN: 32,
    Nextel: 12
},
{
    Month: 'Day6',
    Orange: 20,
    Camtel: 30,
    MTN: 20,
    Nextel: 14
},
{
    Month: 'Day7',
    Orange: 20,
    Camtel: 31,
    MTN: 25,
    Nextel: 16
},
{
    Month: 'Day8',
    Orange: 20,
    Camtel: 31,
    MTN: 0,
    Nextel: 20
},
{
    Month: 'Day9',
    Orange: 30,
    Camtel: 30,
    MTN: 20,
    Nextel: 30
},
{
    Month: 'Day10',
    Orange: 20,
    Camtel: 31,
    MTN: 20,
    Nextel: 31
},
{
    Month: 'Day11',
    Orange: 20,
    Camtel: 30,
    MTN: 20,
    Nextel: 10
},
{
    Month: 'Day12',
    Orange: 40,
    Camtel: 31,
    MTN: 20,
    Nextel: 6
},
{
    Month: 'Day13',
    Orange: 30,
    Camtel: 21,
    MTN: 20,
    Nextel: 3
},
{
    Month: 'Day14',
    Orange: 40,
    Camtel: 31,
    MTN: 20,
    Nextel: 10
},
{
    Month: 'Day15',
    Orange: 20,
    Camtel: 21,
    MTN: 20,
    Nextel: 3
},
{
    Month: 'Day16',
    Orange: 10,
    Camtel: 11,
    MTN: 20,
    Nextel: 22
},
{
    Month: 'Day17',
    Orange: 40,
    Camtel: 30,
    MTN: 20,
    Nextel: 30
},
{
    Month: 'Day18',
    Orange: 30,
    Camtel: 31,
    MTN: 20,
    Nextel: 30
},
{
    Month: 'Day19',
    Orange: 20,
    Camtel: 3,
    MTN: 20,
    Nextel: 20
},
{
    Month: 'Day20',
    Orange: 10,
    Camtel: 1,
    MTN: 20,
    Nextel: 10
},
{
    Month: 'Day21',
    Orange: 40,
    Camtel: 1,
    MTN: 20,
    Nextel: 30
},
{
    Month: 'Day22',
    Orange: 10,
    Camtel: 13,
    MTN: 20,
    Nextel: 13
},
{
    Month: 'Day23',
    Orange: 20,
    Camtel: 31,
    MTN: 20,
    Nextel: 31
},
{
    Month: 'Day24',
    Orange: 40,
    Camtel: 4,
    MTN: 20,
    Nextel: 30
},
{
    Month: 'Day25',
    Orange: 30,
    Camtel: 31,
    MTN: 20,
    Nextel: 12
},
{
    Month: 'Day26',
    Orange: 21,
    Camtel: 31,
    MTN: 20,
    Nextel: 10
},
{
    Month: 'Day27',
    Orange: 4,
    Camtel: 8,
    MTN: 20,
    Nextel: 0
},
{
    Month: 'Day28',
    Orange: 40,
    Camtel: 31,
    MTN: 20,
    Nextel: 0
},
{
    Month: 'Day29',
    Orange: 40,
    Camtel: 31,
    MTN: 20,
    Nextel: 10
},
{
    Month: 'Day30',
    Orange: 40,
    Camtel: 31,
    MTN: 20,
    Nextel: 10
},
{
    Month: 'Day31',
    Orange: 40,
    Camtel: 31,
    MTN: 20,
    Nextel: 10
}

];



//MTN!
function mymtnFunction() {
google.charts.load('current', {
    'packages': ['corechart']
});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable(
        entry.map(function (element) {
            result = []
            result.push(element.Month)
            result.push(element.MTN)
            return result;
        })

    );


    // Set chart options
    var options = {
        vAxis: {
            title: 'Days',
            format: '0',

        },
        hAxis: {
            title: document.getElementById('months').value
        },
        // 'height': 300,
        'title': 'Daily Subscribers Visualization',

    };

    // Instantiate and draw our chart, passing in some options.
    let chart_type = document.getElementById("chart-type").value;
    if (chart_type == "line_chart") {
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
    if (chart_type == "bar_chart") {
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
}
}


// Orange!
function myorangeFunction() {
google.charts.load('current', {
    'packages': ['corechart']
});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable(
        entry.map(function (element) {
            result = []
            result.push(element.Month)
            result.push(element.Orange)
            return result;
        })

    );


    // Set chart options
    var options = {
        vAxis: {
            title: 'Days',
            format: '0',

        },
        hAxis: {
            title: document.getElementById('months').value
        },
        'title': 'Daily Subscribers Visualization',

    };

    // Instantiate and draw our chart, passing in some options.
    let chart_type = document.getElementById("chart-type").value;
    if (chart_type == "line_chart") {
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
    if (chart_type == "bar_chart") {
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
}
}


// Camtel!
function mycamtelFunction() {
google.charts.load('current', {
    'packages': ['corechart']
});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable(
        entry.map(function (element) {
            result = []
            result.push(element.Month)
            result.push(element.Camtel)
            return result;
        })

    );


    // Set chart options
    var options = {
        vAxis: {
            title: 'Days',
            format: '0',

        },
        hAxis: {
            title: document.getElementById('months').value
        },
        //     // 'width': 1000,
        //     // 'height': 800
        'title': 'Daily Subscribers Visualization',

    };

    // Instantiate and draw our chart, passing in some options.
    let chart_type = document.getElementById("chart-type").value;
    if (chart_type == "line_chart") {
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
    if (chart_type == "bar_chart") {
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
}
}

// Nextel!
function mynextelFunction() {
google.charts.load('current', {
    'packages': ['corechart']
});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable(
        entry.map(function (element) {
            result = []
            result.push(element.Month)
            result.push(element.Nextel)
            return result;
        })

    );


    // Set chart options
    var options = {
        vAxis: {
            title: 'Days',
            format: '0',

        },
        hAxis: {
            title: document.getElementById('months').value
        },
        //     // 'width': 1000,
        //     // 'height': 800
        'title': 'Daily Subscribers Visualization',

    };

    // Instantiate and draw our chart, passing in some options.
    let chart_type = document.getElementById("chart-type").value;
    if (chart_type == "line_chart") {
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
    if (chart_type == "bar_chart") {
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
}
}


// All
function myallFunction() {
// if("operator" == "mtn") {
google.charts.load('current', {
    'packages': ['corechart']
});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable(
        entry.map(function (element) {
            result = []
            result.push(element.Month)
            result.push(element.MTN)
            result.push(element.Camtel)
            result.push(element.Orange)
            result.push(element.Nextel)
            return result;
        })

    );


    // Set chart options
    var options = {
        vAxis: {
            title: 'Days',
            format: '0',

        },
        hAxis: {
            title: document.getElementById('months').value
        },
        //     // 'width': 1000,
        //     // 'height': 800
        'title': 'Daily Subscribers Visualization',

    };

    // Instantiate and draw our chart, passing in some options.
    let chart_type = document.getElementById("chart-type").value;
    if (chart_type == "line_chart") {
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
    if (chart_type == "bar_chart") {
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
}
}