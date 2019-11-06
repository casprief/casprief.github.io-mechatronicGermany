var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1lrRw5v4r2OdsGLcwHNIZN20QMkBUCWmaNpIHLTbx-m4/edit?usp=sharing';

function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
         callback: showInfo,
            simpleSheet: true } )
    }

function showInfo(data, tabletop) {
    // console.log(data);

    var dataArray =data.map(function(element){
        return [element.Area, Number(element.Max), Number(element.Min)];
    });

    dataArray.unshift(['Bundesland', 'Max', 'Min']);      
    drawChart(dataArray);
}


google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(dataArray) {

        var data = google.visualization.arrayToDataTable(          
          dataArray
        );        

        var options = {
          chart: {
            
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
}
 

window.addEventListener('DOMContentLoaded', init)