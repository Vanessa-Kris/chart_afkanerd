
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
      'title': 'Monthly Subscribers Visualization',
      width: 900,
      height: 500,
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
};