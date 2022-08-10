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
        },

        hAxis: {
            title: 'Months',
            minValue: 0

        },
        'title': 'Monthly Subscribers Visualization',
        
            };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));

    chart.draw(data, options);

}


// 28 Days
function my5thFunction() {
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
                format: '0'
            },

            hAxis: {
                title: 'Months',
                minValue: 0
            },

            'title': 'Monthly Subscribers Visualization',
            
            
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));

        chart.draw(data, options);

    }
}


// 30 Days
function my6thFunction() {
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

            'title': 'Monthly Subscribers Visualization',
            
            
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));

        chart.draw(data, options);

    }
}

// 31 Days
function my7thFunction() {
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
                format: '0'
            },

            hAxis: {
                title: 'Months',
                minValue: 0
            },

            'title': 'Monthly Subscribers Visualization',
            
            
        };
        var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));

        chart.draw(data, options);

    }
}

// 
function my8thFunction() {
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

            'title': 'Monthly Subscribers Visualization',
            
            

        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));

        chart.draw(data, options);

    }
}