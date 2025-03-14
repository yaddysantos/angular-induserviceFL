import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, TranslateModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  cases = [
    {
      before: 'assets/img/gallery/photos/cases/case1-after.webp',
      after: 'assets/img/gallery/photos/cases/case1-before.webp',
      description: 'Pintura completa de un Susuki',
    },
    {
      before: 'assets/img/gallery/photos/cases/case2-after.webp',
      after: 'assets/img/gallery/photos/cases/case2-before.webp',
      description: 'Restauración total de un Chevrolet',
    },
    {
      before:"assets/img/gallery/photos/projets/project2.webp",
      after:"assets/img/gallery/photos/projets/project1.webp",
      description:"Latoneria y pintura automotriz"
    },
    {
      before:"assets/img/gallery/photos/projets/project6.webp",
      after:"assets/img/gallery/photos/projets/project5.webp",
      description:"Latoneria y pintura automotriz"
    },
    {
      before:"assets/img/gallery/photos/projets/project4.webp",
      after:"assets/img/gallery/photos/projets/project3.webp",
      description:"Polichada y Embellecimiento Automotriz"
    },
    {
      before:"assets/img/gallery/photos/projets/project8.webp",
      after:"assets/img/gallery/photos/projets/project7.webp",
      description:"Pintura, latoneria completa"
    },
  ];

  testimonials = [
    {
      image: 'assets/img/gallery/photos/cases/case1-after.webp',
      text: 'Mi auto quedó como nuevo, Excelente servicio, gracias InduService FL',
      name: 'Cesar Santos',
      start: '5',
    },
    {
      image: 'assets/img/gallery/photos/cases/case2-after.webp',
      text: 'Excelente servicio y atención, impactada por su calidad.',
      name: 'María Gómez',
      start: '5',
    },
    {
      image: 'assets/img/gallery/photos/projets/testimonial.webp',
      text: 'Ya veo porque eligieron su slogan, es increbile como pudieran arreglar mi carro. Impactado',
      name: 'Andres Torres',
      start: '4.5',
    },
  ];
}
