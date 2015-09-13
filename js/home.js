$(document).ready(function() {
  var charts = [
    {className: '.skillHTML', percentage: 90},
    {className: '.skillCSS', percentage: 90},
    {className: '.skillJS', percentage: 75},
    {className: '.skilljQuery', percentage: 75},
    {className: '.skillRuby', percentage: 80},
    {className: '.skillRails', percentage: 80}
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


  $('nav a[href*=#], #home a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

  $('body').scrollspy({ target: '.navigation' });

  $('nav').affix({
    offset: {
      top: 100
    }
  })
});