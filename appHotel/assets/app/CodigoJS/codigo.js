function cambia_manecilla() {
  var currentdate = new Date(); 
  var horas = currentdate.getHours();
  var minutos = currentdate.getMinutes();
  var segundos = currentdate.getSeconds();
  horas = (horas > 12)? horas -12 : horas;
  horas = (horas == '00')? 12 : horas;
  var segundero = document.getElementById("segundos");
  var minutero = document.getElementById("minutos");
  var horero = document.getElementById("horas");
  var rotateS =  "rotate("+segundos * 6+"deg)";
  var rotateM =  "rotate("+minutos * 6+"deg)";
  var rotateH =  "rotate("+((horas * 30) + (minutos / 2))+"deg)";
  segundero.style.webkitTransform = rotateS;
  minutero.style.webkitTransform = rotateM;  
  horero.style.webkitTransform = rotateH;
  segundero.style.MozTransform = rotateS;
  minutero.style.MozTransform = rotateM;  
  horero.style.MozTransform = rotateH;
}
setInterval(function() {cambia_manecilla()}, 1000);