// 28 Days
function my1stFunction() {
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
            // entry[0].Nextel,
            // entry[0].Orange,
            // entry[0].MTN,
            // entry[0].Camtel
        ])

        entry.map(function (element) {
            if (element.Days == 28) {
                data = []
                data.push(element.Month)
                data.push(element.Days)
                // data.push(element.Nextel)
                // data.push(element.Orange)
                // data.push(element.MTN)
                // data.push(element.Camtel)

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

            },
            hAxis: {
                title: 'Months'
            },
            'title': 'Monthly Subscribers Visualization',

        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);

    }
}


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
            // entry[0].Nextel,
            // entry[0].Orange,
            // entry[0].MTN,
            // entry[0].Camtel
        ])

        entry.map(function (element) {
            if (element.Days == 30) {
                data = []
                data.push(element.Month)
                data.push(element.Days)
                // data.push(element.Nextel)
                // data.push(element.Orange)
                // data.push(element.MTN)
                // data.push(element.Camtel)

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

            },
            hAxis: {
                title: 'Months'
            },
            'title': 'Monthly Subscribers Visualization',

        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);

    }
}

// 31 Days
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
            entry[0].Days,
            // entry[0].Nextel,
            // entry[0].Orange,
            // entry[0].MTN,
            // entry[0].Camtel
        ])

        entry.map(function (element) {
            if (element.Days == 31) {
                data = []
                data.push(element.Month)
                data.push(element.Days)
                // data.push(element.Nextel)
                // data.push(element.Orange)
                // data.push(element.MTN)
                // data.push(element.Camtel)

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

            },
            hAxis: {
                title: 'Months'
            },
            'title': 'Monthly Subscribers Visualization',

        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);

    }
}

// 
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
                format: '0',

            },
            hAxis: {
                title: 'Months'
            },
            'title': 'Monthly Subscribers Visualization',
            width: 900,
            height: 500,

        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);

    }
}