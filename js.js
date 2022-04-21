$(document).ready(function() {
    var botao = $('.bt1');
    var dropDown = $('.ul-noticias');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {
    var botao = $('.bt2');
    var dropDown = $('.ul-entret');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   $(document).ready(function() {
    var botao = $('.bt3');
    var dropDown = $('.ul-fale-c');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });