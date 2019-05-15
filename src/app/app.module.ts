import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { QuillModule } from 'ngx-quill';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpsRequestInterceptor } from './shared/https-request-interceptor';
import { UsuarioService } from './services/usuario.service';
import { CheckAuth } from './shared/check-auth';
import { ConfirmService } from './core/confirm/confirm.service';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ClienteService } from './services/cliente.service';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FormClienteComponent } from './pages/cliente/form-cliente/form-cliente.component';
import { OsComponent } from './pages/os/os.component';
import { FormOsComponent } from './pages/os/form-os/form-os.component';
import { OsService } from './services/os.service';
import { ServicoService } from './services/servico.service';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { FormUsuarioComponent } from './pages/usuario/form-usuario/form-usuario.component';

library.add(fas, far);
registerLocaleData(localePt, 'pt');

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ClienteComponent,
    FormClienteComponent,
    OsComponent,
    FormOsComponent,
    UsuarioComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'intranet' }),
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center'
    }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    CoreModule,
    NgxDatatableModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    QuillModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    },
    CookieService,
    UsuarioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
    CheckAuth,
    ConfirmService,
    ClienteService,
    ServicoService,
    OsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
