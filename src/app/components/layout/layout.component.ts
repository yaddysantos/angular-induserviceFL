import { Component } from '@angular/core';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NosotrosComponent, ServiciosComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
