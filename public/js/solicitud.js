$(document).ready(function() {
    $(window).on('load', function() {
        $(".cargando").fadeOut(1000);
    });
$('.mi_checkbox').change(function() {
var Estado = $(this).prop('checked') == true ? 1 : 0; 
var id = $(this).data('id'); 
    console.log(Estado);
$.ajax({
    type: "GET",
    dataType: "json",
    url: "{{ route('UpdateStatusSoli')}}",
    data: {'Estado': Estado, 'id': id},
    success: function(data){
        $('#resp' + id).html(data.var); 
        console.log(data.var)
     
    }
});
})
  
});