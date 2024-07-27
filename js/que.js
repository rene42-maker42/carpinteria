
(function(){
    var descripcion = function(){
        alert("hola");
    };

    var btnn = document.getElementById("boton");
    btnn.addEventListener("click", descripcion);
});


/*
  <script>

    (function(){
     var saludo = function(){
        alert('hola gordo');
     };

     var saludo2 = function(){
        alert('hola copo candy');
     }
       var btn = document.getElementById("boton");
       btn.addEventListener("click" , saludo);
       btn.addEventListener("click" , saludo2);
       btn.removeEventListener("click" , saludo); // elimina el evento click saludo
    }())
   </script>

*/
