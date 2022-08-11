function my28Function() {
    my1stFunction()
    my5Function()
}

function my30Function() {
    my2ndFunction()
    my6Function()  
}

function my31Function() {
    my3rdFunction()
    my7Function()
}

function myAllFunction() {
    my4thFunction()
    my8Function()
};



///////////////////////////////////////////////////////////
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
            format: '0',
            minValue: 0

        },

        hAxis: {
            title: 'Months'
        },

        'title': 'Monthly Subscribers Visualization',
        
        

    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));

    chart.draw(data, options);

}


// 28 Days
function my5Function() {
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
                format: '0',
                minValue: 0
            },

            hAxis: {
                title: 'Months'
            },

            'title': 'Monthly Subscribers Visualization',
            
            
        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));

        chart.draw(data, options);

    }
}


// 30 Days
function my6Function() {
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
                format: '0',
                minValue: 0
            },

            hAxis: {
                title: 'Months'
            },

            'title': 'Monthly Subscribers Visualization',
            
            
        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));

        chart.draw(data, options);

    }
}

// 31 Days
function my7Function() {
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
            if (element.Days == 31) {
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
                format: '0',
                minValue: 0
            },

            hAxis: {
                title: 'Months'
            },

            'title': 'Monthly Subscribers Visualization',
            
            
        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));

        chart.draw(data, options);

    }
}

// 
function my8Function() {
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

        var vAxisRange = data.getColumnRange(1);
        var ticks = [];
        for (var i = 0; i <= vAxisRange.max; i++) {
            ticks.push(i);
        }


        // Set chart options
        var options = {
            vAxis: {
                title: 'Days',
                format: '0',
                minValue: 0
            },

            hAxis: {
                title: 'Months'
            },

            'title': 'Monthly Subscribers Visualization',
            
            

        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));

        chart.draw(data, options);

    }
}
