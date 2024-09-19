import { Routes } from '@angular/router';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
  {
    path: 'entrypoint',
    loadComponent: () =>
      import('./pages/entrypoint/entrypoint.component').then((x) => x.EntrypointComponent),
  },
  {
    path: 'order',
    loadComponent: () =>
      import('./pages/order/order.component').then((x) => x.OrderComponent),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('./pages/payment/payment.component').then((x) => x.PaymentComponent),
  },



  { path: '', redirectTo: '/entrypoint', pathMatch: 'full' }, //Si se carga la URL raíz se redirige a /entrypoint
  { path: '**', redirectTo: '/entrypoint' }, // Si se carga cualquier ruta no contemplada
];
