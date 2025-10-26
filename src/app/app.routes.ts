import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: 'expiration',
        loadComponent: () => import('./features/tabs/expiration/expiration.component').then( m => m.ExpirationComponent)
      },
      {
        path: 'consumption',
        loadComponent: () => import('./features/tabs/consumption/consumption.component').then( m => m.ConsumptionComponent)
      },
      {
        path: 'productivity',
        loadComponent: () => import('./features/tabs/productivity/productivity.component').then( m => m.ProductivityComponent)
      },
      {
        path: 'settings',
        loadComponent: () => import('./features/tabs/settings/settings.component').then( m => m.SettingsComponent ),
      },
      {
        path: '',
        redirectTo: 'expiration',
        pathMatch: 'full'
      }
    ]
  },


  /*{
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, */
];
