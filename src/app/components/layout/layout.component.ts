import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @ViewChild('reviewsTrack') reviewsTrack!: ElementRef;

  brands = [
    { name: 'Chevrolet', logo: 'assets/img/gallery/photos/logotipo/chevrolet-logo.png' },
    { name: 'Ford', logo: 'assets/img/gallery/photos/logotipo/ford-logo.png' },
    { name: 'Ford', logo: 'assets/img/gallery/photos/logotipo/honda-logo.png' },
    { name: 'Ford', logo: 'assets/img/gallery/photos/logotipo/hyundai-logo.png' },
    { name: 'Kia', logo: 'assets/img/gallery/photos/logotipo/kia-logo.png' },
    { name: 'Mazda', logo: 'assets/img/gallery/photos/logotipo/mazda-logo.png' },
    { name: 'Mazda', logo: 'assets/img/gallery/photos/logotipo/mercedes-benz-logo.png' },
    { name: 'Renault', logo: 'assets/img/gallery/photos/logotipo/mitsubishi-logo.png' },
    { name: 'Renault', logo: 'assets/img/gallery/photos/logotipo/renault-logo.png' },
    { name: 'Suzuki', logo: 'assets/img/gallery/photos/logotipo/subaru-logo.png' },
    { name: 'Suzuki', logo: 'assets/img/gallery/photos/logotipo/suzuki-logo.png' },
    { name: 'Volkswagen', logo: 'assets/img/gallery/photos/logotipo/volkswagen-logo.png' },
    { name: 'Volkswagen', logo: 'assets/img/gallery/photos/logotipo/bmw-logo.png' },
    { name: 'Volkswagen', logo: 'assets/img/gallery/photos/logotipo/kubota_logo.png' },
    { name: 'Volkswagen', logo: 'assets/img/gallery/photos/logotipo/bobcat-logowebp.webp' },
    { name: 'Volkswagen', logo: 'assets/img/gallery/photos/logotipo/kenworth.webp' },
    { name: 'Volkswagen', logo: 'assets/img/gallery/photos/logotipo/new-holland-agriculture-logo.png' },
  ];

  services = [
    {url: "assets/img/inicio/latoneria.webp", title:"inicio.services.one"},
    {url: "assets/img/inicio/fibra-vidrio.webp", title:"inicio.services.two"},
    {url: "assets/img/inicio/polichado.webp", title:"inicio.services.three"},
    {url: "assets/img/inicio/pintura.webp", title:"inicio.services.four"},
    {url: "assets/img/inicio/welder.webp", title:"inicio.services.five"},
    {url: "assets/img/inicio/meton.webp", title:"inicio.services.six"},
  ]

  reviews = [
    {
      author: 'Juan Pérez',
      rating: 5,
      text: '¡Excelente servicio! Mi auto quedó como nuevo. 100% recomendado.',
      date: 'Hace 2 días',
    },
    {
      author: 'María González',
      rating: 4.5,
      text: 'Excelente! El trabajo es impecable, se toman tanto el tiempo y la técnica necesaria para ejerce la mejor labor. Recomendado!',
      date: 'Hace 1 semana',
    },
    {
      author: 'Carlos Ramírez',
      rating: 5,
      text: 'Calidad y compromiso, superaron mis expectativas.',
      date: 'Hace 3 semanas',
    },
    {
      author: 'Ana Torres',
      rating: 4.5,
      text: 'Gran atención al cliente y resultados increíbles.',
      date: 'Hace 1 mes',
    },
  ];

  ngAfterViewInit() {
    const track = this.reviewsTrack.nativeElement;
    let scrollAmount = 0;

    function scroll() {
      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0;
      } else {
        scrollAmount += 1;
      }
      track.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    }

    scroll();
  }
}
