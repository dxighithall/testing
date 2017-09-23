$(document).ready(()=>{
  $.get('js/articulo.json',function(data){
    $(".titulo").html(data.titulo);
    $(".descripcion").html(data.descripcion);
    $(".subtitulo").html(data.subtitulo);
  });

  $('.enviar').on('click',(e)=>{
    e.preventDefault();
    var email=$('#emailInput').val();
    if(!email){
      $('#emailInput').val("Compeltá el email");
    }else{
      $.post('js/articulo.php',{"email": email},function(data){
        alert("Enviado");
      });
    };
  });
});
