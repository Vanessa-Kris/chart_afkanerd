google.charts.load('current', {'packages':['bar']});
            google.charts.setOnLoadCallback(drawStuff);
      
            function drawStuff() {
              var data = new google.visualization.arrayToDataTable([
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
                ]);


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