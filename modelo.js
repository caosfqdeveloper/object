//1-Se realiza un modelo generico y luego se lleva a lo particular

//Definimos un objeto mediante una función constructora

function Simpson(nombre, edad, peso, esCalvo, fraseFavorita){
    //Atributos de clase, iniciacion de variables del objeto
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.esCalvo = esCalvo;
    this.fraseFavorita = fraseFavorita;

    //Metodo para obtener la foto
    //this. indica que el metodo será propiedad del objeto nuevo, que se creará en el 
    //Estos métodos se llaman anónimos
    //Metodo es un func asociada a un objeto

    this.obtenerFoto = function(){
        document.write(`<div class="container">`);
        document.write(`<img src="./assets/${this.nombre.toLowerCase()}.png" alt="${this.nombre}" > `);
    }
    //Medodo para obtener el nombre
    this.obtenerNombre = function(){
        document.write(`<p>Nombre:${this.nombre}</p>`);
    }
    //Metodo para obtener la edad
    this.obtenerEdad = function(){
        document.write(`<p>Edad:${this.edad}</p>`);
    }
    //Metodo para obtener el peso
    this.obtenerPeso = function(){
        document.write(`<p>Peso:${this.peso}</p>`);
    }
    //Metodo para obtener si es calvo
    this.obtenerEsCalvo = function(){
        document.write(`<p>Es calvo:${this.esCalvo}</p>`);
    }
    //Metodo para obtener la frase favorita
    this.obtenerFraseFavorita = function(){
        document.write(`<p>fraseFavorita:${this.nombre}: ${this.fraseFavorita}</p>`);
        document.write(`</div>`);
    }
   


    

}