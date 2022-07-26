google.charts.load('current', {'packages':['bar']});
            google.charts.setOnLoadCallback(drawStuff);
      
          
            function drawStuff() {
    const entry = [
        {Month: 'Month', Day: 'Days'},
        {Month: 'Jaunary', Day: 31},
        {Month: 'Faburay', Day: 28},
        {Month: 'March', Day: 31},
        {Month: 'April', Day: 30}, 
        {Month: 'May', Day: 31},
        {Month: 'June', Day: 30},
        {Month: 'July', Day: 31},
        {Month: 'August', Day: 31},
        {Month: 'September', Day: 30},
        {Month: 'October', Day: 31},
        {Month: 'Nevember', Day: 30},
        {Month: 'December', Day: 31},
  ];

  // Create the data table.
  // Call data using map
  var data = google.visualization.arrayToDataTable (
      entry.map(function(element){
          result = []
          result.push(element.Month)
          result.push(element.Day)
          return result;
      })
  );

  // Ticks 
  var vAxisRange = data.getColumnRange(1);
  var ticks = [];
  for (var i = 0; i <= vAxisRange.max; i++) {
      ticks.push(i);
  }    
                /*[
                ['Months', 'Numbers of days'],
                ["Jaunary", 31],
                ["Faburay", 28],
                ["March", 31],
                ["April", 30], 
                ["May", 31],
                ["June", 30],
                ["July", 31],
                ["August", 31],
                ["September", 30],
                ["October", 31],
                ["Nevember", 30],
                ["December", 31],
                ]);*/


              var options = {
                title: 'Numbers of days each Month has',
                width: 800,
               legend: { position: 'none' },
                chart: { title: 'The 12 Months of The Year',
                         subtitle: 'How many days each Month has' },

                bars: 'vertical',
                axes: {
                  x: {
                    0: { side: 'bottom', label: 'Months'} // bottom x-axis.
                  }
                },
                bar: { groupWidth: "80%" }
              };
      
              var chart = new google.charts.Bar(document.getElementById('mybarchart'));
              chart.draw(data, options);
            };