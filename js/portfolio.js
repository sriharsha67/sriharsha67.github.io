$(document).ready(function(){

    $(".android-calculator").on('mouseenter', function(){
      $(this).prepend("<h4 class='on-hover-heading'>Abacus<hr />     \
        <p class='on-hover-paragraph'>Abacus is an awesome Calculator with a niche design and a sleek UI</p></h4>  \
        ");
    });
    $(".android-calculator").on('mouseleave', function(){
      $(this).find("h4").remove();
    });

});