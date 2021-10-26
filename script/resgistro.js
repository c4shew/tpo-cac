

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });

  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('username').value;
    if(usuario.length == 0) {
      alert('No ingresó su usuario');
      return;
    }

    var clave1 = document.getElementById('pwd1').value;
    var clave2 = document.getElementById('pwd2').value
  if (clave1 !== clave2) {
    alert('La clave no es válida');
    return;
  }
  this.submit();
  alert('Su usuario fue creado con éxito')
}
