<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<!--patron de diseñSingleton -->
    <script>
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = 'This is the Singleton instance';
    Singleton.instance = this;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
console.log(instance1.data); // "This is the Singleton instance"
</body>

/*
patron factory
class Circle {
  draw() {
    console.log("Dibujando un círculo");
  }
}

class Square {
  draw() {
    console.log("Dibujando un cuadrado");
  }
}

class ShapeFactory {
  createShape(type) {
    if (type === 'circle') {
      return new Circle();
    } else if (type === 'square') {
      return new Square();
    }
  }
}

const factory = new ShapeFactory();
const circle = factory.createShape('circle');
const square = factory.createShape('square');

circle.draw(); // "Dibujando un círculo"
square.draw(); // "Dibujando un cuadrado"


-----------
patron de diseño constructor

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

var persona1 = new Persona("Juan", 30);
var persona2 = new Persona("María", 25);

persona1.saludar();
persona2.saludar();
*/
    </script>

</html>