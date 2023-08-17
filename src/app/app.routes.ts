import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'material', pathMatch: 'full' },
  { path: 'prime', loadComponent: () => import('./prime/prime.component').then(m => m.PrimeComponent) },
  { path: 'material', loadComponent: () => import('./material/material.component').then(m => m.MaterialComponent) },
];
