var operando_a;
var operando_b;
var operacion;



function init(){
    var pantalla = document.getElementById("pantalla");
    var igual = document.getElementById('igual');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco= document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    uno.onclick = function(e){
        pantalla.textContent =  pantalla.textContent + "1";
    }
    
    dos.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "2";
    }
    tres.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "3";
    }
    cuatro.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "4";
    }
    cinco.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "5";
    }
    seis.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "6";
    }
    siete.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "7";
    }
    ocho.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "8";
    }
    nueve.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "9";
    }
    cero.onclick = function(e){
        pantalla.textContent = pantalla.textContent + "0";
    }

    borrar.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
          operando_a = pantalla.textContent;
          operacion ="+";
          limpiar();
    }
    resta.onclick = function (e){
        operando_a = pantalla.textContent;
        operacion = "-";
        limpiar();
}
    multiplicacion.onclick = function (e){
        operando_a = pantalla.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e){
        operando_a = pantalla.textContent;
        operacion = "/"
        limpiar();
    }
    igual.onclick = function (e){
        operando_b = pantalla.textContent;
        resolver();
    }
    function limpiar(){
        pantalla.textContent = "";
    }
    function resetear(){
        pantalla.textContent = "";
        operando_a = 0;
        operando_b = 0;
        operacion  = "";
    }

    function resolver(){
        var resultado = 0;
        switch(operacion){
           case  "+":
          resultado =  parseFloat(operando_a) + parseFloat(operando_b);
            break;
          case "-":
            resultado = parseFloat(operando_a) - parseFloat(operando_b);
            break;
          case "/":
          resultado = parseFloat(operando_a) / parseFloat(operando_b);
          break;
          case "*":
            resultado = parseFloat(operando_a) * parseFloat(operando_b);
            break;

        }
        resetear();
        pantalla.textContent = resultado;
    }
}
