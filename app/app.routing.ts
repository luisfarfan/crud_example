import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosAddComponent }  from './usuarios/usuarios_add.component';
import { UsuariosReadComponent }  from './usuarios/usuarios_read.component';
const appRoutes: Routes = [
  { path: '', component: UsuariosReadComponent },
  { path: 'add', component: UsuariosAddComponent }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);