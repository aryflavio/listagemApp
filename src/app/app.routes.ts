import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'harbour',
    loadComponent: () => import('./harbour/harbour.page').then( m => m.HarbourPage)
  },
  {
    path: 'omen',
    loadComponent: () => import('./omen/omen.page').then( m => m.OmenPage)
  },
  {
    path: 'viper',
    loadComponent: () => import('./viper/viper.page').then( m => m.ViperPage)
  },
  {
    path: 'chamber',
    loadComponent: () => import('./chamber/chamber.page').then( m => m.ChamberPage)
  },
  {
    path: 'sage',
    loadComponent: () => import('./sage/sage.page').then( m => m.SagePage)
  },
];
