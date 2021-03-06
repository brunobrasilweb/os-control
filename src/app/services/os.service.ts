import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Http } from '../model/http';
import * as _ from 'lodash';

@Injectable()
export class OsService {

  http = new Http();

  constructor(private httpClient: HttpClient) { }

  getOne(id) {
    return this.httpClient
      .get(this.http.urlApi('/ordem-servico/' + id))
      .pipe(
        catchError(this.http.handleError)
      );
  }

  lista() {
    return this.httpClient
      .get(this.http.urlApi('/ordem-servico'))
      .pipe(
        catchError(this.http.handleError)
      );
  }

  
  save(data) {
    if (data.id) {
      return this.httpClient
      .put(this.http.urlApi('/ordem-servico/' + data.id), data)
      .pipe(
        catchError(this.http.handleError)
      );
    } else {
      return this.httpClient
        .post(this.http.urlApi('/ordem-servico'), data)
        .pipe(
          catchError(this.http.handleError)
        );
    }
  }

  delete(id) {
    return this.httpClient
      .delete(this.http.urlApi('/ordem-servico/' + id))
      .pipe(
        catchError(this.http.handleError)
      );
  }

}
