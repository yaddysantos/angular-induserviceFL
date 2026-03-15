import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    title: 'Inicio | Induservice FL',
    loadComponent: () =>
      import('./components/layout/layout.component').then(
        (l) => l.LayoutComponent
      ),
  },
  {
    path: 'nosotros',
    title: 'Quiénes Somos | Induservice FL',
    loadComponent: () =>
      import('./components/layout/nosotros/nosotros.component').then(
        (n) => n.NosotrosComponent
      ),
  },
  {
    path: 'servicios',
    title: 'Servicios | Induservice FL',
    loadComponent: () =>
      import('./components/layout/servicios/servicios.component').then(
        (s) => s.ServiciosComponent
      ),
  },
  {
    path: 'gallery',
    title: 'Galería | Induservice FL',
    loadComponent: () =>
      import('./components/layout/gallery/gallery.component').then(
        (c) => c.GalleryComponent
      ),
  },
  {
    path: 'contacto',
    title: 'Contáctanos | Induservice FL',
    loadComponent: () =>
      import('./components/layout/contacto/contacto.component').then(
        (c) => c.ContactoComponent
      ),
  },
  { path: '**', redirectTo: 'inicio' }
];
