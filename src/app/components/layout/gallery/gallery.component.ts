import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ListaPhotosService } from '../../../../lib/services/lista-photos.service';
import { Photo } from '../../../../lib/servicios.model';

@Component({
    selector: 'app-gallery',
    imports: [CommonModule, TranslateModule],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  isOpenGallery = false;
  isActiveGallery = true;

  listaPhotos:Photo[] | undefined;

  photos: Photo | undefined;

  constructor(private listaPhotosService: ListaPhotosService) {}

  ngOnInit(): void {
    this.listaPhotos = this.listaPhotosService.getPhotos();
  }

  openGallery(id: number) {
    this.closeAll();
    this.isOpenGallery = true;
    this.isActiveGallery = false;
    this.photos = this.listaPhotos?.[id];
  }

  closeAll() {
    this.isActiveGallery = true;
    this.isOpenGallery = false;
  }
}
