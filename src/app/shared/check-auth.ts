import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../services/usuario.service';

@Injectable()
export class CheckAuth implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.usuarioService.logado()) {
      this.usuarioService.logout();
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
