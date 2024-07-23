import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from '../servicios.model';

@Injectable({
  providedIn: 'root'
})
export class ListaPhotosService {

  private photos: Photo[] = [
    {
      title:"./assets/img/gallery/photos/logotipo/Mercedes_benz.png",
      etapa1: './assets/img/gallery/photos/pintura/mercedes/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/mercedes/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/mercedes/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/mercedes/4.jpg',
    },
    {
      title:"./assets/img/gallery/photos/logotipo/Mercedes_benz.png",
      etapa1: './assets/img/gallery/photos/pintura/mercedes-camioneta/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/mercedes-camioneta/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/mercedes-camioneta/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/mercedes-camioneta/4.jpg',
    },
    {
      title:"./assets/img/gallery/photos/logotipo/Mazda_logo.png",
      etapa1: './assets/img/gallery/photos/pintura/mazda-red/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/mazda-red/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/mazda-red/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/mazda-red/4.jpg',
    },
    {
      title:"./assets/img/gallery/photos/logotipo/toyota.jpg",
      etapa1: './assets/img/gallery/photos/pintura/toyota/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/toyota/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/toyota/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/toyota/4.jpg',
    },
    {
      title:"./assets/img/gallery/photos/logotipo/Suzuki.png",
      etapa1: './assets/img/gallery/photos/pintura/susuki-blanco/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/susuki-blanco/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/susuki-blanco/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/susuki-blanco/4.jpg',
    },
    {
      title:"./assets/img/gallery/photos/logotipo/renault.jpg",
      etapa1: './assets/img/gallery/photos/pintura/renault-gris/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/renault-gris/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/renault-gris/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/renault-gris/4.jpg',
    },
    {
      title:"./assets/img/gallery/photos/logotipo/Chevrolet-logo.png",
      etapa1: './assets/img/gallery/photos/pintura/chevrolet-pickup/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/chevrolet-pickup/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/chevrolet-pickup/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/chevrolet-pickup/4.jpg',
    },
    {
      title:"./assets/img/gallery/photos/logotipo/Chevrolet-logo.png",
      etapa1: './assets/img/gallery/photos/pintura/chevrolet-verde/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/chevrolet-verde/2.png',
      etapa3: './assets/img/gallery/photos/pintura/chevrolet-verde/3.png',
      etapa4: './assets/img/gallery/photos/pintura/chevrolet-verde/4.jpg',
    },
    {
      title:"./assets/img/gallery/photos/logotipo/Chevrolet-logo.png",
      etapa1: './assets/img/gallery/photos/pintura/chevrolet-camioneta/1.png',
      etapa2: './assets/img/gallery/photos/pintura/chevrolet-camioneta/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/chevrolet-camioneta/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/chevrolet-camioneta/4.jpg',
    },
  ] 

  getPhotos(): Photo[]{
    return this.photos;
  }
}
