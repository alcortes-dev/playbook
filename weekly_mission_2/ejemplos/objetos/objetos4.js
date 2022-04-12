// Ejemplo 4: Objeto con métodos
const pet = {
  name: "Tulio",
  // Esta es una función que se guarda como propiedad
  sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`)
  },
  hola(){
    console.log("Mi segundo saludo");
  }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()
pet.hola();
