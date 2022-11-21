//Estructura de las opciones a escoger de la primera pagina cargable al iniciar el proyecto.

import { Injectable } from "@angular/core";
import { Place } from "../places/place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private places: Place[] = [
    

    {
      id: '1',
      title: 'Quienes somos',
      imageURL: 'https://appsiel.com.co/img/1611332472quienes.png',
      comments: ['EMAUS:', 'Somos una entidad social, nacida en Buenaventura Colombia en 1981, comprometida con el apoyo a las poblaciones más vulnerables de la región Pacífica Colombiana, brindando capacitación y apoyo a los niños con funciones motoras e intelectuales limitadas, al igual que a sus familias, a mujeres cabeza de hogar y sus roles en la sociedad, cuidadores, donde se exalta la importancia de educar y rescatar del anonimato a estas personas, que en la mayoría de los casos al recibir una educación inclusiva, pueden desarrollarse plenamente en la sociedad.']
      
      },
      
      
      {
        id: '2',
        title: 'Emaus en el mundo',
        imageURL: 'https://www.emmaus-international.org/images/cartes/Carte-Colombie.png',
        comments: ['Las asociaciones Emaús de todo el mundo se reunieron por primera vez en 1969 en Berna (Suiza) y se creó Emaús Internacional en 1971. Las sucesivas asambleas mundiales fueron forjando la identidad del Movimiento y, desde finales de la década de 1980, posibilitaron el surgimiento de acciones y preguntas comunes.']
        
      },
      
      {
        id: '3',
        title: 'Nuestro trabajo',
        imageURL: 'https://www.admaiorem.com/wp-content/uploads/2020/09/La-importancia-de-nuestro-ambiente-de-trabajo-positivo.jpg',
        comments: ['Capacitaciones.', 'Apoyos.', 'Redistribución y construccion.', 'Alternativas efectivas al sistema capitalista.', 'La acogida de los más vulnerables.', 'La lucha contra la discriminacion.', 'La lucha contra la desigualdad.']
        
      },
      
      
      {
        id: '4',
        title: 'Usuarios de Emaus',
        imageURL: 'https://img.freepik.com/vector-premium/icono-usuario_6091-78.jpg?w=2000',
        comments: ['Usuarios de la organizacion:', '', 'Acompañantes:', '']
        
      },
      
      
      {
        id: '5',
        title: 'Acerca de',
        imageURL: 'https://static.vecteezy.com/system/resources/previews/009/341/415/non_2x/information-sign-icon-design-free-png.png',
        comments: ['Andres Felipe Monroy', 'Ingeniero de sistema', 'Trabajo segunda entrega', 'amonroy@unipacifico.edu.co', 'Universidad del pacifico']
        
      },
      
      
      {
        id: '6',
        title: 'Contactanos',
        imageURL: 'https://sites.google.com/site/wwwmymusicacomcom/_/rsrc/1371076704260/contactanos/telefono_0.gif',
        comments: ['Buenaventura, Valle del Cauca', 'Teléfono: 315 2296960', 'Correo: emauscolombia@gmail.com']
        
      }
      




  ];


  //opciones extrax para actualizar, registrar y eliminar.


  constructor() {}

  getPlaces(): Place[] {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId;
      })
    };
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  }

  addPlace(title, imageURL) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

}
