// LAB CLASES

// Ejercicio 1: Sistema básico de vehículos
// Crea un sistema de clases para representar diferentes tipos de vehículos. Debes crear:
// 1.Una clase Vehiculo con propiedades: marca, modelo, año y un
// método obtenerDetalles() que devuelva un string con toda la información.
// 2.Una clase Coche que herede de Vehiculo y añada la propiedad numeroPuertas.
// 3.Una clase Moto que herede de Vehiculo y añada la propiedad cilindrada.
// Crea instancias de ambas clases hijas y muestra sus detalles.

class Vehiculo {
    constructor(marca,modelo,año){
        this.marca = marca
        this.modelo = modelo
        this.año = año
    }
    obtenerDetalles(){
        return (
            console.log("Marca: ", this.marca),
            console.log("Modelo: ", this.modelo),
            console.log("Año: ", this.año)
        );
    }
}

let auto =  new Vehiculo("Ford","Fiesta",2012)
auto.obtenerDetalles()


class Coche extends Vehiculo {
    constructor(marca,modelo,año,numeroPuertas){
        super(marca,modelo,año)
        this.numeroPuertas = numeroPuertas
    }
    obtenerDetalles(){
        return (
            console.log("Marca: ", this.marca),
            console.log("Modelo: ", this.modelo),
            console.log("Año: ", this.año),
            console.log("Puertas: ", this.numeroPuertas)
        );
    }
    
}

let coche = new Coche("Mazda","Mx-5",2018,2)
coche.obtenerDetalles()


class Moto extends Vehiculo {
    constructor(marca,modelo,año,cilindrada){
        super(marca,modelo,año)
        this.cilindrada = cilindrada
    }
    obtenerDetalles(){
        return (
            console.log("Marca: ", this.marca),
            console.log("Modelo: ", this.modelo),
            console.log("Año: ", this.año),
            console.log("Cilindrada: ", this.cilindrada)
        );
    }
}

let moto = new Moto("Honda","NX 190",2025,190)
moto.obtenerDetalles()


// Ejercicio 2: Sistema de empleados
// Crea un sistema de clases para representar empleados de una empresa:
// 1.Clase Empleado con propiedades: nombre, edad, salarioBase y
// método calcularSalario() que devuelve el salario base.
// 2.Clase Gerente que herede de Empleado y añada bonificacion.
// Sobrescribe calcularSalario() para que sume la bonificación.
// 3.Clase Desarrollador que herede de Empleado y añada lenguaje. El salario es igual al base.
// Crea instancias de cada tipo y muestra sus salarios.

class Empleado {
    constructor(nombre,edad,salarioBase){
        this.nombre = nombre
        this.edad = edad
        this.salarioBase = salarioBase
    }
    calcularSalario(){
        console.log("Salario base: ",this.salarioBase)
    }
}

class Gerente extends Empleado{
    constructor(nombre,edad,salarioBase,bonificacion){
        super(nombre,edad,salarioBase)
        this.bonificacion = bonificacion
    }
    calcularSalario(){
        console.log("Salario base + bono: ", (this.salarioBase+this.bonificacion))
    }   
}

class Desarrollador extends Empleado{
    constructor(nombre,edad,salarioBase,lenguaje){
        super(nombre,edad,salarioBase)
        this.lenguaje = lenguaje
    }
    calcularSalario(){
        console.log("Salario base: ", this.salarioBase)
    }   
}

let explotado = new Empleado("Juan","25",1600000)
explotado.calcularSalario()

let patron = new Gerente("Pepe","53",10600000,400000)
patron.calcularSalario()

let desarrollador = new Desarrollador("Juan","25",4600000)
desarrollador.calcularSalario()

// Ejercicio 3: Sistema de productos electrónicos
// Modela un sistema de productos electrónicos con:
// 1.Clase Producto con nombre, precio, marca y método descripcion().
// 2.Clase Telefono que herede de Producto y añada almacenamiento, ram.
// 3.Clase Laptop que herede de Producto y añada procesador, pulgadas.
// Crea instancias y muestra sus descripciones.

class Producto {
    constructor(nombre,precio,marca){
        this.nombre = nombre
        this.precio = precio
        this.marca = marca
    }
    descripcion(){
        console.log("Nombre: ",this.nombre)
        console.log("Precio: ",this.precio)
        console.log("Marca: ",this.marca)
    }
}

class Telefono extends Producto{
    constructor(nombre,precio,marca,almacenamiento,ram){
        super(nombre,precio,marca)
        this.almacenamiento = almacenamiento
        this.ram = ram
    }
    descripcion(){
        console.log("Nombre: ",this.nombre)
        console.log("Precio: ",this.precio)
        console.log("Marca: ",this.marca)
        console.log("Almacenamiento: ",this.almacenamiento)
        console.log("Ram: ",this.ram)
    }
}

class Laptop extends Producto{
    constructor(nombre,precio,marca,procesador,pulgadas){
        super(nombre,precio,marca)
        this.procesador = procesador
        this.pulgadas = pulgadas
    }
    descripcion(){
        console.log("Nombre: ",this.nombre)
        console.log("Precio: ",this.precio)
        console.log("Marca: ",this.marca)
        console.log("Procesador: ",this.procesador)
        console.log("Pulgadas: ",this.pulgadas)
    }
}

let papitas = new Producto("Rizadas",2000,"Frito Lay")
papitas.descripcion()

let iphone = new Telefono("iPhone 16",7900000,"Apple","1 Tb","16Gb")
iphone.descripcion()

let lenovo = new Laptop("Lenovo legion 5",8000000,"Lenovo","AMD Ryzen 7",`15"`)
lenovo.descripcion()


// Ejercicio 4: Sistema de figuras geométricas
// Crea un sistema de clases para figuras geométricas:
// 1.Clase Figura con propiedad color y método area() que devuelve 0.
// 2.Clase Rectangulo que herede de Figura y añada base, altura. Sobrescribe area().
// 3.Clase Circulo que herede de Figura y añada radio. Sobrescribe area().
// Crea instancias y muestra sus áreas

class Figura {
    constructor(color){
        this.color = color
    }
    area(){
        console.log(0)
    }
}

class Rectangulo extends Figura {
    constructor(color, base , altura){
        super(color)
        this.base = base
        this.altura = altura
    }
    area(){
        console.log("Area del rectangulo: ",this.base*this.altura)
    }
}

class Circulo extends Figura {
    constructor(color, radio){
        super(color)
        this.radio = radio
    }
    area(){
        console.log("Area del rectangulo: ",Math.PI*this.radio*this.radio)
    }
}

let figuraRoja = new Figura("Roja")

let rectanguloUno = new Rectangulo("Amarillo",25,10)
rectanguloUno.area()

let circuloUno = new Circulo("Azul",10)
circuloUno.area()

// Ejercicio 5: Sistema de animales
// Modela un sistema de animales con:
// 1.Clase Animal con nombre, edad y método emitirSonido().
// 2.Clase Perro que herede de Animal y sobrescriba emitirSonido().
// 3.Clase Gato que herede de Animal y sobrescriba emitirSonido().
// Crea instancias y haz que emitan sonidos.

class Animal {
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    emitirSonido(){
        console.log(" Mute ")
    }
}

class Perro extends Animal {
    constructor(nombre,edad){
        super(nombre,edad)
    }
    emitirSonido(){
        console.log(this.nombre)
        console.log("tiene", this.edad, "años y hace ")
        console.log("Guau")
    }
}

class Gato extends Animal {
    constructor(nombre,edad){
        super(nombre,edad)
    }
    emitirSonido(){
        console.log(this.nombre)
        console.log("tiene", this.edad, "años y hace ")
        console.log("Miau")
        console.log("Miau")
    }
}

let perroUno = new Perro("Pluto",10)
perroUno.emitirSonido()

let gatoUno = new Gato("Garfield",8)
gatoUno.emitirSonido()