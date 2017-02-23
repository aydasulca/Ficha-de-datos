function fichaDatos() {
 var nombre= document.getElementById('firstname').value;
  var apellido= document.getElementById('lastname').value;
  var dni= document.getElementById('dni').value;
  var direccion= document.getElementById('address').value;

if(nombre!="" && apellido!="" && dni!="" && direccion!=""){
  document.write(document.getElementById('mostrardatos').innerHTML = "Nombre: "
  + nombre + "<br><br> Apellido: " + apellido + "<br><br> DNI: "
  + dni + "<br><br> Direccion: " + direccion);
 };
};
