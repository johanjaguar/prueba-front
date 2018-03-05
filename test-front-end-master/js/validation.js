document.addEventListener("DOMContentLoaded", function () {

  setValueDrop('marca');
  setValueDrop('modelo');
  setValueDrop('anio');

  var button = document.getElementsByClassName('form__btn')[0];
  button.addEventListener('click', () => {
    this.preventDefault;
    var marca = document.getElementsByClassName('form__drop-marca')[0];
    var modelo = document.getElementsByClassName('form__drop-modelo')[0];
    var anio = document.getElementsByClassName('form__drop-anio')[0];
    var email = document.getElementsByClassName('form__email')[0];
    var counter = 0;
    var message = Array();
    var plural = false;


    if (marca.getAttribute('data-value') == "none") {
      counter++;
      message.push('Marca del auto');
    }
    
    if (modelo.getAttribute('data-value') == "none") {
      counter++;
      message.push('Modelo del auto');
    }
    
    if (anio.getAttribute('data-value') == "none") {
      counter++;
      message.push('Año del auto');
    }
    
    if( email.value.length==0 ) {
      counter++;
      message.push('Email del usuario');
    }
    var prefix = (counter > 1 ) ? "Porfavor diligencie los campos " : "Porfavor diligencie el campo ";
    var messageFinal = prefix;
    for(var i = 0; i < message.length; i++) {
      messageFinal += message[i] + ", ";
    }
    messageFinal += ' sin estos datos no podemos continuar con el procedimiento.';
    alert(messageFinal);
  });
});

function setValueDrop(drop) {
  var menuMarca = document.querySelectorAll('.menu-' + drop + ' li a');
  Object.keys(menuMarca).forEach(function (key) {
    menuMarca[key].addEventListener('click', function (event) {
      var buttonMarca = document.getElementsByClassName('form__drop-' + drop)[0];
      buttonMarca.setAttribute('data-value', this.innerHTML);
    });
  });
}
