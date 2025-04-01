import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./components/layout/layout.component').then(
        (l) => l.LayoutComponent
      ),
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./components/layout/nosotros/nosotros.component').then(
        (n) => n.NosotrosComponent
      ),
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./components/layout/servicios/servicios.component').then(
        (s) => s.ServiciosComponent
      ),
      title: 'Servicios Induservice F.L.'
  },
  {
    path: 'gallery',
    loadComponent: () =>
      import('./components/layout/gallery/gallery.component').then(
        (c) => c.GalleryComponent
      ),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./components/layout/contacto/contacto.component').then(
        (c) => c.ContactoComponent
      ),
  },
  { path: '**', redirectTo: 'inicio' } // Redirección en caso de ruta no encontrada
];
