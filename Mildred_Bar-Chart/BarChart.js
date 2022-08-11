const entry = [{
    Month: 'Months',
    Days: 'Days'
},
{
    Month: 'January',
    Days: 31
},
{
    Month: 'Febuary',
    Days: 28
},
{
    Month: 'March',
    Days: 31
},
{
    Month: 'April',
    Days: 30
},
{
    Month: 'May',
    Days: 31
},
{
    Month: 'June',
    Days: 30
},
{
    Month: 'July',
    Days: 31
},
{
    Month: 'August',
    Days: 31
},
{
    Month: 'September',
    Days: 30
},
{
    Month: 'October',
    Days: 31
},
{
    Month: 'November',
    Days: 30
},
{
    Month: 'December',
    Days: 31
}
];


// All chart///////////////////////////////////////////////////////////////////
 // Default

// Default

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
            result.push(element.Days)
            return result;
        })

    );

    // Set chart options
    var options = {
        vAxis: {
            title: 'Days',
            format: '0'
        },

        hAxis: {
            title: 'Months',
            minValue: 0

        },
        'title': 'The 12 Months in a Year'
            };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div0'));
    chart.draw(data, options);
};


























// 28 Days//////////////////////////////////////////////////////////////////
function my1stFunction() {
    google.charts.load('current', {'packages': ['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var result = []
        result.push([
            entry[0].Month,
            entry[0].Days
        ])

        entry.map(function (element) {
            if (element.Days == 28) {
                data = []
                data.push(element.Month)
                data.push(element.Days)
                result.push(data);
            }
        })

        var data = google.visualization.arrayToDataTable(
            result
        );

        // Set chart options
        var options = {
            vAxis: {
                title: 'Days',
                format: '0'
            },

            hAxis: {
                title: 'Months',
                minValue: 0
            },
            'title': 'Months With 28 Days'                    
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div0'));
        chart.draw(data, options);

    }
}






////////////////////////////////////////////////


// 30 Days
function my2ndFunction() {
    google.charts.load('current', {
        'packages': ['corechart']
    });


    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var result = []
        result.push([
            entry[0].Month,
            entry[0].Days,
            
        ])

        entry.map(function (element) {
            if (element.Days == 30) {
                data = []
                data.push(element.Month)
                data.push(element.Days)
                result.push(data);
            }
        })

        var data = google.visualization.arrayToDataTable(
            result
        );

        var vAxisRange = data.getColumnRange(1);
        var ticks = [];
        for (var i = 0; i <= vAxisRange.max; i++) {
            ticks.push(i);
        }


        // Set chart options
        var options = {
            vAxis: {
                title: 'Days',
                format: '0'
            },

            hAxis: {
                title: 'Months',
                minValue: 0
            },

            'title': 'Monthly Subscribers Visualization',
            
            
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div0'));

        chart.draw(data, options);

    }
};




// 31 Days////////////////////////////////////////
function my3rdFunction() {
    google.charts.load('current', {
        'packages': ['corechart']
    });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var result = []
        result.push([
            entry[0].Month,
            entry[0].Days
        ])

        entry.map(function (element) {
            if (element.Days == 31) {
                data = []
                data.push(element.Month)
                data.push(element.Days)
                result.push(data);
            }
        })

        var data = google.visualization.arrayToDataTable(result );

        // Set chart options
        var options = {
            vAxis: {
                title: 'Days',
                format: '0'
            },

            hAxis: {
                title: 'Months',
                minValue: 0
            },

            'title': 'Monthly Subscribers Visualization'                    
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div0'));
        chart.draw(data, options);

    }
};






// ////////////////////
function my4thFunction() {
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
                result.push(element.Days)
                return result;
            })
        );

        // Set chart options
        var options = {
            vAxis: {
                title: 'Days',
                format: '0'
            },

            hAxis: {
                title: 'Months',
                minValue: 0
            },
            'title': 'The 12 Months in the Year'
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div0'));
        chart.draw(data, options);

    }
};