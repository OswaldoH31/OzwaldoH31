$(document).ready(function(){

    $('#inputGroupSelect01').on('change',function(){
        var selectValor = '#' + $(this).val();
        $('#pai').children('div').hide();
        $('#pai').children(selectValor).show();

    });

});


$(document).ready(function(){
    
    // Comprobar si estamos, al menos, 100 px por debajo de la posición top
    // para mostrar o esconder el botón
    $(window).scroll(function(){

      if ( $(this).scrollTop() > 100 ) {

        $('.scroll-to-top').fadeIn();

      } else {

        $('.scroll-to-top').fadeOut();

      }

    });

    // al hacer click, animar el scroll hacia arriba
    $('.scroll-to-top').click( function( e ) {

      e.preventDefault();
      $('html, body').animate( {scrollTop : 0}, 800 );

    });

});



$(function(){
    var image = $(".banner-img").find("img").attr("src");
    $(".banner-img img").css("opacity", "1");

    $(".strip").mouseover(function(){
        var currentImage =$(this).attr("data-image");
        $(this).parent().parent().find(".banner-img img").attr("src",currentImage);
        $(".banner-img img").css("opacity","1");
    });

    $(".strip").mouseout(function(){
        $(".banner-img img").css("opacity",".8");
        $(".banner-img img").attr("src", image);

    }); 
    
});




$(buscar());

function buscar(consulta){

    $.ajax({
        url:'App/buscar.php',
        type:'POST',
        dataType: 'html',
        data:{consulta: consulta},
    })
    .done(function (respuesta) {
        $("#datos").html(respuesta);
    })
    .fail(function() {
        console.log("error");
    })


}


$(document).on('keyup','#busqueda',function(){
    var valor =$(this).val();
    if(valor != ""){
        buscar(valor);
    }else{
        buscar();
    }
});


$(document).ready(function(){
  const password = $('#password') ;
  $('#pass').click(function(){
      if(password.prop('type') == 'password'){
          $(this).addClass('fa-eye-slash');
          password.attr('type','text')
      }
      else {
          $(this).removeClass('fa-eye-slash');
          password.attr('type','password');
      }
  })
})