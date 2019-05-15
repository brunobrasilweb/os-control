import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './core/layout/main/main.component';
import { CheckAuth } from './shared/check-auth';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FormClienteComponent } from './pages/cliente/form-cliente/form-cliente.component';
import { OsComponent } from './pages/os/os.component';
import { FormOsComponent } from './pages/os/form-os/form-os.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { FormUsuarioComponent } from './pages/usuario/form-usuario/form-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [CheckAuth],
    children: [
      { path: '', component: InicioComponent },
      // Cliente
      { path: 'cliente', component: ClienteComponent },
      { path: 'cliente/novo', component: FormClienteComponent },
      { path: 'cliente/:id/editar', component: FormClienteComponent },
      // Ordem de Serviço
      { path: 'os', component: OsComponent },
      { path: 'os/novo', component: FormOsComponent },
      { path: 'os/:id/editar', component: FormOsComponent },
      // Usuário
      { path: 'usuario', component: UsuarioComponent },
      { path: 'usuario/novo', component: FormUsuarioComponent },
      { path: 'usuario/:id/editar', component: FormUsuarioComponent }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
