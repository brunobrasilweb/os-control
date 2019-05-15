import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  userImage: String = '';
  notificacoes = [];
  totalNotificacoes = 0;

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    const usuario = this.usuarioService.logado();
  }

  sidebarToggle() {
    document.body.classList.toggle('sidebar-hidden');
    document.body.classList.toggle('sidebar-mobile');
  }

  signOut(): void {
    this.usuarioService.logout();
    this.router.navigate(['/login']);
  }

  minhaConta(): void {
    this.router.navigate(['/minha-conta']);
  }

  formatarData(data) {
    return moment.tz(data, null).fromNow();
  }

}
