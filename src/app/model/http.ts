import { environment } from '../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

export class Http {

  urlApi(endpoint) {
    return environment.oscontrol.apiUrl + endpoint;
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro na Intranet. Por favor informar o problema.');
    } else {
      console.error(
        `Serviço retornou um erro ${error.status}, ` +
        `erro: ${error.error}`);
    }

    return new ErrorObservable (
      'Algo de errado ocorreu. Verique com o suporte sobre o problema (' + error.error.cause.cause.message + ').');
  }

}
