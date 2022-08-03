
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
            entry[0].Nextel,
            entry[0].Orange,
            entry[0].MTN,
            entry[0].Camtel
        ])

        entry.map(function (element) {
            if(element.Days == 28){
                data = []
                data.push(element.Month)
                data.push(element.Nextel)
                data.push(element.Orange)
                data.push(element.MTN)
                data.push(element.Camtel)

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
            'title': 'Daily Subscribers Visualization',

        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

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
            entry[0].Nextel,
            entry[0].Orange,
            entry[0].MTN,
            entry[0].Camtel
        ])

        entry.map(function (element) {
            if(element.Days == 30){
                data = []
                data.push(element.Month)
                data.push(element.Nextel)
                data.push(element.Orange)
                data.push(element.MTN)
                data.push(element.Camtel)

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
            'title': 'Daily Subscribers Visualization',

        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

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
            entry[0].Nextel,
            entry[0].Orange,
            entry[0].MTN,
            entry[0].Camtel
        ])

        entry.map(function (element) {
            if(element.Days == 31){
                data = []
                data.push(element.Month)
                data.push(element.Nextel)
                data.push(element.Orange)
                data.push(element.MTN)
                data.push(element.Camtel)

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
            'title': 'Daily Subscribers Visualization',

        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

                 chart.draw(data, options);
       
    }
}