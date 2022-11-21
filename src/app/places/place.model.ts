//interfaz de informacion de las diferentes rutas: imagenes, titulo, texto, y posicion.

export interface Place {
    id: string;
    title: string;
    imageURL: string;
    comments: string[]
}