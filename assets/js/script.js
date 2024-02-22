// Clase Padre
class Multimedia {
  constructor(url) {
    this._url = url;
  }

  get url() {
    return this._url;
  }

  setInicio(tiempo) {
    return `Este método es para realizar un cambio en la URL del video`;
  }
}

// Clase Hijo
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }

  // Este método recibe la URL y la inyecta al src del video
  playMultimedia() {
    modulo.agregarVideoPublic(this._url, this._id);
  }

  setInicio(tiempo) {
    let elemento = document.getElementById(this._id);
    let urlConInicio = `${this._url}?start=${tiempo}`;
    elemento.setAttribute("src", urlConInicio);
    console.log(`Se ha establecido el inicio en el segundo ${tiempo}`);
  }
}

// Se implementa el patrón de módulo
let modulo = (() => {
  let agregarVideoPrivate = (url, id) => {
    let elemento = document.getElementById(id);
    elemento.setAttribute("src", url);
  };

  // Para que la función sea pública debe estar dentro del return
  return {
    agregarVideoPublic: (url, id) => {
      agregarVideoPrivate(url, id);
    },
  };
})();

// Instanciar música
let musica = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  "musica"
);

// Instanciar películas
let pelicula = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  "peliculas"
);

// Instanciar series
let serie = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  "series"
);

// Llamar a los métodos
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Llamar al setInicio
musica.setInicio(5);
pelicula.setInicio(10);
serie.setInicio(15);
