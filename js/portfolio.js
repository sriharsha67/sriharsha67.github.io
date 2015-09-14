$(document).ready(function(){

    $(".android-calculator").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Abacus<hr/>     \
        <p class='on-hover-paragraph'>Abacus is an awesome Calculator with a niche design and a sleek UI</p></h4>  \
        ");
    });
    $(".android-calculator").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    $(".psdtohtml").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>PSD TO HTML<hr/>     \
        <p class='on-hover-paragraph'>A Static Responsive Website built using Jekyll</p></h4>  \
        ");
    });
    $(".psdtohtml").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

    $(".socialmatrimony").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Social Matrimony<hr/>     \
        <p class='on-hover-paragraph'>A New Era of Matrimony</p></h4>  \
        ");
    });
    $(".socialmatrimony").on('mouseleave', function(){
      $(this).find("h4").remove();
    });
});