import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'entrypoint',
    loadComponent: () =>
      import('./entrypoint/entrypoint.component').then((x) => x.EntrypointComponent),
  },



  { path: '', redirectTo: '/entrypoint', pathMatch: 'full' }, //Si se carga la URL raíz se redirige a /entrypoint
  { path: '**', redirectTo: '/entrypoint' }, // Si se carga cualquier ruta no contemplada
];
