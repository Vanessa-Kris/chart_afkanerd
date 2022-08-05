google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Months', 'Days'],
        ['January', 31],
        ['Febuary', 29],
        ['March', 31],
        ['April', 30],
        ['May', 31],
        ['June', 30],
        ['July', 31],
        ['August', 31],
        ['September', 30],
        ['October', 31],
        ['November', 30],
        ['December', 31]
      ]);

      var options = {
        title: 'The 12 Months in a Year',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Jan-Dec',
          minValue: 0
        },
        vAxis: {
          title: 'Months'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('All'));

      chart.draw(data, options);
    }