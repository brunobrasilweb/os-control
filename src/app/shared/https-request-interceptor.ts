import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  private userLogged = null;

  constructor(private router: Router, private injector: Injector) {
      this.userLogged = localStorage.getItem('USER');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let usuarioService = this.injector.get(UsuarioService);

    /*
    if (!this.userLogged) {
      usuarioService.logout();
      this.router.navigate(['/login']);
    }*/

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req);
  }

}
