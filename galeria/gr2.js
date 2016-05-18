 google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Distracci&oacute;n ', 'Porciento'],
          ['Facebook',     40],
          ['WhatsApp',     50],
          ['Peliculas',  10]
        ]);
         var options = {
          title: 'Distracci&oacute;n',
          is3D: true,};
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }

