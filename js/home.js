$(document).ready(function() {
  var charts = [
    {className: '.skillHTML', percentage: 90},
    {className: '.skillCSS', percentage: 80},
    {className: '.skillJS', percentage: 65},
    {className: '.skilljQuery', percentage: 70},
    {className: '.skillRuby', percentage: 55},
    {className: '.skillRails', percentage: 50}
  ];
  charts.forEach(function(chart) {
    $(chart.className).ClassyLoader({
      speed: 30,
      diameter: 80,
      fontSize: '1.5em',
      fontFamily: 'Open Sans',
      fontColor: 'rgba(0,0,0,0.8)',
      lineColor: 'rgba(255,103,95,1)',
      percentage: chart.percentage,
      lineWidth: 10,
      start: 'top',
      remainingLineColor: 'rgba(200,200,200,0.1)'
    });
  })
});