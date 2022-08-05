const entry = [{
    Month: 'Months',
    Days: 'Days'
    //Orange: 'Orange subscribers',
   // Camtel: 'Camtel Subscribers',
  //  MTN: 'MTN Subscribers',
 //   Nextel: 'Nextel Subscribers'
},
{
    Month: 'January',
    Days: 31
  //  Orange: 20,
    //Camtel: 24,
   // MTN: 0,
    //Nextel: 10
},
{
    Month: 'Febuary',
    Days: 28
  //  Orange: 20,
  //  Camtel: 9,
   // MTN: 6,
 //   Nextel: 30
},
{
   Month: 'Febuary',
   Days: 29
  //  Orange: 20,
  //  Camtel: 9,
   // MTN: 6,
 //   Nextel: 30
},
{
    Month: 'March',
    Days: 31
   // Orange: 10,
   // Camtel: 15,
   // MTN: 8,
   // Nextel: 20
},
{
    Month: 'April',
    Days: 30
    //Orange: 20,
   // Camtel: 6,
   // MTN: 9,
  //  Nextel: 31
},
{
    Month: 'May',
    Days: 31
  //  Orange: 22,
  //  Camtel: 1,
  //  MTN: 12,
  //  Nextel: 12
},
{
    Month: 'June',
    Days: 30
  //  Orange: 20,
    //Camtel: 0,
   // MTN: 20,
  //  Nextel: 14
},
{
    Month: 'July',
    Days: 31
    //Orange: 20,
   // Camtel: 21,
    //MTN: 25,
 //   Nextel: 16
},
{
    Month: 'August',
    Days: 31
   // Orange: 20,
   // Camtel: 12,
   // MTN: 0,
   // Nextel: 20
},
{
    Month: 'September',
    Days: 30
    //Orange: 13,
    //Camtel: 3,
    //MTN: 20,
    //Nextel: 30
},
{
    Month: 'October',
    Days: 31
   // Orange: 20,
    //Camtel: 10,
    //MTN: 20,
    //Nextel: 31
},
{
    Month: 'November',
    Days: 30
    //Orange: 20,
    //Camtel: 0,
    //MTN: 20,
    //Nextel: 10
},
{
    Month: 'December',
    Days: 31
    //Orange: 40,
   // Camtel: 3,
   // MTN: 20,
    //Nextel: 6
}

];




//Default chart 
// Default
// Default
// All chart
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
        'title': 'The 12 Months in a Year',
        width: 900,
        height: 500,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'))
    chart.draw(data, options);
};
// end of default chart





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
            entry[0].Days
            //entry[0].Orange,
            //entry[0].MTN,
            //entry[0].Camtel
        ])

        entry.map(function (element) {
            if(element.Days == 28){
                data = []
                data.push(element.Month)
                data.push(element.Days)
               // data.push(element.Orange)
              // data.push(element.MTN)
                //data.push(element.Camtel)
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
            'title': 'Months with 28 days',

        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

                 chart.draw(data, options);
       
    }
};




// 29 Days
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
            entry[0].Days
            //entry[0].Orange,
            //entry[0].MTN,
            //entry[0].Camtel
        ])

        entry.map(function (element) {
            if(element.Days == 29){
                data = []
                data.push(element.Month)
                data.push(element.Days)
               // data.push(element.Orange)
              // data.push(element.MTN)
                //data.push(element.Camtel)
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
            'title': 'Months with 29 Days',

        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

                 chart.draw(data, options);
       
    }
};


// 30 Days
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
            //entry[0].Orange,
            //entry[0].MTN,
           // entry[0].Camtel
        ])

        entry.map(function (element) {
            if(element.Days == 30){
                data = []
                data.push(element.Month)
                data.push(element.Days)
                //data.push(element.Orange)
               // data.push(element.MTN)
                //data.push(element.Camtel)
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
            'title': 'Months with 30 Days',

        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

                 chart.draw(data, options);
       
    }
};








// 31 Days
function my4thFunction() {
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
            //entry[0].Orange,
            //entry[0].MTN,
            //entry[0].Camtel
        ])

        entry.map(function (element) {
            if(element.Days == 31){
                data = []
                data.push(element.Month)
                data.push(element.Days)
                //data.push(element.Orange)
                //data.push(element.MTN)
                //data.push(element.Camtel)
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
            'title': 'Months with 31',

        };
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

                 chart.draw(data, options);
       
    }
};




// All chart
function my5thFunction() {
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
        'title': 'The 12 Months in a Year',
        width: 900,
        height: 500,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'))
    chart.draw(data, options);
}
};