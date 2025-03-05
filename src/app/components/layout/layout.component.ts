import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @ViewChild('reviewsTrack') reviewsTrack!: ElementRef;

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
