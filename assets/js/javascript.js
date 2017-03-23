window.addEventListener('load', function(){
  var button = document.getElementById('button');
  button.addEventListener('click', function(){
    var nombre= document.getElementById('firstname').value;
    var apellido= document.getElementById('lastname').value;
    var dni= document.getElementById('dni').value;
    var direccion= document.getElementById('address').value;
    var soloLetra= /[a-zA-Z]/;
    var soloNumeros= /[0123456789]{8}/;
    //validando espacios vacios
    if(nombre =! "" && apellido != "" && dni != "" && direccion =! ""){
    //validando solo letras en nombre y apellido
      if(soloLetra.test(nombre) != true && soloLetra.test(apellido) != true){
        alert("Completa los campos con datos validos");
      }
      if(soloNumeros.test(dni) != true ){
        alert("Completa los campos con datos validas")
      }
    }else{
      alert("Completa todos los datos");
    }
  })
})
/*
var str = "123456789";
var reg = /[a-zA-Z]/g;
if(reg.test(str) != true){
console.log("Error")
}

*/
/*function fichaDatos() {
 var nombre= document.getElementById('firstname').value;
  var apellido= document.getElementById('lastname').value;
  var dni= document.getElementById('dni').value;
  var direccion= document.getElementById('address').value;

if(nombre!="" && apellido!="" && dni!="" && direccion!=""){
  document.write(document.getElementById('mostrardatos').innerHTML = "Nombre: "
  + nombre + "<br><br> Apellido: " + apellido + "<br><br> DNI: "
  + dni + "<br><br> Direccion: " + direccion);
 };
};*/
