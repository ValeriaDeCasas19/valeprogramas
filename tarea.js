
const Peliculas = { //se crea el objeto peliculas
    titulo : "La Fiesta de las salchichas", //se crean las propiedades
    director : "Conrad Vernom",
    duracion : 129,
    año : 2016,
    
    reproducir: function() {
    console.log("Reproduciendo " + this.titulo + "...");
    },

    pausar: function() {
    console.log(this.titulo + " en pausa.");
    },

    informacion: function () {
        console.log("Título:", this.titulo);
        console.log("Director:", this.director);
        console.log("Duración:", this.duracion, "minutos");
        console.log("Año:", this.año);
    }
};

Peliculas.reproducir();
Peliculas.pausar();
Peliculas.informacion();


