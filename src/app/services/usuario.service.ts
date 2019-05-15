import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Http } from '../model/http';
import * as _ from 'lodash';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UsuarioService {

  http = new Http();

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  getOne(id) {
    return this.httpClient
      .get(this.http.urlApi('/usuario/' + id))
      .pipe(
        catchError(this.http.handleError)
      );
  }

  lista() {
    return this.httpClient
      .get(this.http.urlApi('/usuario'))
      .pipe(
        catchError(this.http.handleError)
      );
  }

  logado() {
    const user = localStorage.getItem('USER');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  dados(campo) {
    const usuario = JSON.parse(localStorage.getItem('USER'));

    if (usuario[campo] != null) {
      return usuario[campo];
    }

    return null;
  }

  logout() {
    localStorage.clear();
  }

  login(login, senha) {
    return this.httpClient
    .get(this.http.urlApi('/usuario/login/' + login + '/' + senha))
    .pipe(
      catchError(this.http.handleError)
    );
  }

  save(data) {
    if (data.id) {
      return this.httpClient
      .put(this.http.urlApi('/usuario/' + data.id), data)
      .pipe(
        catchError(this.http.handleError)
      );
    } else {
      return this.httpClient
        .post(this.http.urlApi('/usuario'), data)
        .pipe(
          catchError(this.http.handleError)
        );
    }
  }

  delete(id) {
    return this.httpClient
      .delete(this.http.urlApi('/usuario/' + id))
      .pipe(
        catchError(this.http.handleError)
      );
  }

}
