// let a=2, b=5, r, s="Resto = "

// r= a <<= 8

// const persona ={ //objetos
//     nombre : "Valeria",
//     apeillidoPaterno: "De Casas",
//     apellidoMaterno: "Arroyo",
//     semestre: 7
// }

// const fruta =["naranja", "manzana", "platano", "tomate", 2, 2.5, new Date(), {

// }] //array o arreglo
// //console.log(fruta[6]) // asi se accede

// function promedio(u1, u2, u3, u4){ //funciones
//     let prom = (u1+u2+u3+u4)/4
//     return prom
// }

// console.log(promedio(8,9,7,9))

const Peliculas = {
    titulo: "La Fiesta de las salchichas",
    director: "Conrad Vernom",
    duracion: 129,
    año: 2016,
    reproducir: function() {
      console.log("Reproduciendo " + this.titulo + "...");
    },
    pausar: function() {
      console.log(this.titulo + " en pausa.");
    },
    obtenerInformacion: function() {
      console.log("Título:", this.titulo);
      console.log("Director:", this.director);
      console.log("Duración:", this.duracion, "minutos");
      console.log("Año:", this.año);
    }
  };
  

  // Llamando a los métodos del objeto Peliculas
  Peliculas.reproducir();
  Peliculas.obtenerInformacion();
  Peliculas.pausar();
  
