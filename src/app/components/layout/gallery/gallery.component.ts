import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  isOpenGallery = false;

  listaGaleria = [
    {
      title:"./assets/img/gallery/photos/logotipo/Mazda_logo.png",
      etapa1: './assets/img/gallery/photos/pintura/mazda-red/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/mazda-red/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/mazda-red/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/mazda-red/4.jpg',
    },
    {
      title:"./assets/img/gallery/photos/logotipo/Mercedes_benz.png",
      etapa1: './assets/img/gallery/photos/pintura/mercedes/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/mercedes/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/mercedes/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/mercedes/4.jpg',
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
      title:"",
      etapa1: './assets/img/gallery/photos/pintura/renault-gris/1.jpg',
      etapa2: './assets/img/gallery/photos/pintura/renault-gris/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/renault-gris/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/renault-gris/4.jpg',
    },
    {
      title:"",
      etapa1: './assets/img/gallery/photos/pintura/chevrolet-camioneta/1.png',
      etapa2: './assets/img/gallery/photos/pintura/chevrolet-camioneta/2.jpg',
      etapa3: './assets/img/gallery/photos/pintura/chevrolet-camioneta/3.jpg',
      etapa4: './assets/img/gallery/photos/pintura/chevrolet-camioneta/4.jpg',
    },
  ];

  listaPhotos:any;

  openGallery(id: number) {
    this.closeAll();
    this.isOpenGallery = true;
    this.listaPhotos = this.listaGaleria[id];
  }

  closeAll() {
    this.isOpenGallery = false;
  }
}
