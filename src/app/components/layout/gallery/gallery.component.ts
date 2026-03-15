
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  imports: [TranslateModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  cases = [
    {
      before: 'assets/img/gallery/photos/projets/case1-before.webp',
      after: 'assets/img/gallery/photos/projets/case1-after.webp',
      description: 'Pintura completa de un Susuki',
    },
    {
      before: 'assets/img/gallery/photos/projets/case2-before.webp',
      after: 'assets/img/gallery/photos/projets/case2-after.webp',
      description: 'Restauración total de un Chevrolet',
    },
    {
      before:"assets/img/gallery/photos/projets/project1.webp",
      after:"assets/img/gallery/photos/projets/project2.webp",
      description:"Latoneria y pintura automotriz"
    },
    {
      before:"assets/img/gallery/photos/projets/project5.webp",
      after:"assets/img/gallery/photos/projets/project6.webp",
      description:"Latoneria y pintura automotriz"
    },
    {
      before:"assets/img/gallery/photos/projets/project3.webp",
      after:"assets/img/gallery/photos/projets/project4.webp",
      description:"Polichada y Embellecimiento Automotriz"
    },
    {
      before:"assets/img/gallery/photos/projets/project7.webp",
      after:"assets/img/gallery/photos/projets/project8.webp",
      description:"Pintura, latoneria completa"
    },
  ];

  comparePositions = this.cases.map(() => 50);

  testimonials = [
    {
      image: 'assets/img/gallery/photos/projets/case1-after.webp',
      text: 'Mi auto quedó como nuevo, Excelente servicio, gracias InduService FL',
      name: 'Cesar Santos',
      start: '5',
    },
    {
      image: 'assets/img/gallery/photos/projets/case2-after.webp',
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

  updatePosition(index: number, event: Event): void {
    const target = event.target as HTMLInputElement;
    this.comparePositions[index] = Number(target.value);
  }

  getAfterClip(position: number): string {
    return `inset(0 0 0 ${position}%)`;
  }
}
