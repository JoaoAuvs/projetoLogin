import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/Authentication/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/Authentication/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/Authentication/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperacao-de-senha',
    loadChildren: () => import('./pages/Authentication/recuperacao-de-senha/recuperacao-de-senha.module').then( m => m.RecuperacaoDeSenhaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tela-perfil',
    loadChildren: () => import('./pages/tela-perfil/tela-perfil.module').then( m => m.TelaPerfilPageModule)
  },
  {
    path: 'tela-embarcado',
    loadChildren: () => import('./pages/tela-embarcado/tela-embarcado.module').then( m => m.TelaEmbarcadoPageModule)
  },
  {
    path: 'tela-ambiente',
    loadChildren: () => import('./pages/tela-ambiente/tela-ambiente.module').then( m => m.TelaAmbientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
