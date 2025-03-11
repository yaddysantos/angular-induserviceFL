import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule, TranslateModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss',
})
export class ServiciosComponent {
  carousel = [
    {
      url: 'assets/img/teamgroup/1.webp',
      alt: 'Trabajo 1',
      class: 'carousel-item active',
    },
    {
      url: 'assets/img/teamgroup/2.webp',
      alt: 'Trabajo 2',
      class: 'carousel-item',
    },
    // {
    //   url: 'assets/img/teamgroup/3.webp',
    //   alt: 'Trabajo 3',
    //   class: 'carousel-item',
    // },
    {
      url: 'assets/img/teamgroup/4.webp',
      alt: 'Trabajo 4',
      class: 'carousel-item',
    },
    {
      url: 'assets/img/teamgroup/5.webp',
      alt: 'Trabajo 5',
      class: 'carousel-item',
    },
    {
      url: 'assets/img/teamgroup/6.webp',
      alt: 'Trabajo 6',
      class: 'carousel-item',
    },
  ];

  services = [
    {
      url: 'assets/img/gallery/servicios/ic-pintura.png',
      alt: 'latoneria',
      title: 'services.latoneria.title',
      text: 'services.latoneria.subtitle',
    },
    {
      url: 'assets/img/gallery/servicios/ic-cabina.png',
      alt: 'cabina',
      title: 'services.cabina.title',
      text: 'services.cabina.subtitle',
    },
    {
      url: 'assets/img/gallery/servicios/ic-restauracion.png',
      alt: 'restauracion',
      title: 'services.repair.title',
      text: 'services.repair.subtitle',
    },
    {
      url: 'assets/img/gallery/servicios/ic-pintura-automotriz.png',
      alt: 'pintura',
      title: 'services.paint.title',
      text: 'services.paint.subtitle',
    },
    {
      url: 'assets/img/gallery/servicios/ic-rines.png',
      alt: 'rines',
      title: 'services.wheel.title',
      text: 'services.wheel.subtitle',
    },
    {
      url: 'assets/img/gallery/servicios/ic-porcelanizado.png',
      alt: 'porcelanizado',
      title: 'services.porcenalizado.title',
      text: 'services.porcenalizado.subtitle',
    },
    {
      url: 'assets/img/gallery/servicios/ic-embellecimiento.png',
      alt: 'embellecimiento',
      title: 'services.embellecimiento.title',
      text: 'services.embellecimiento.subtitle',
    },
    {
      url: 'assets/img/gallery/servicios/ic-fibra-vidrio.png',
      alt: 'fibra-vidrio',
      title: 'services.fibraVidrio.title',
      text: 'services.fibraVidrio.subtitle',
    },
    {
      url: 'assets/img/gallery/servicios/ic-reparacion-plasticos.png',
      alt: 'meton',
      title: 'services.plastico.title',
      text: 'services.plastico.subtitle',
    },
    {
      url: 'assets/img/gallery/servicios/ic-welder.png',
      alt: 'soldadura',
      title: 'services.welder.title',
      text: 'services.welder.subtitle',
    },
  ];
}
