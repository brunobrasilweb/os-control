import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  frmLogin = null;
  frmSenha = null;
  login: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService,
    private router: Router, private toastr: ToastrService) {
      this.form();
    }

  ngOnInit() {
  }

  form() {
    this.login = this.formBuilder.group({
      usuario: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    });
  }

  logar() {
    const login = this.login.value;

    this.usuarioService.login(login.usuario, login.senha).subscribe(data => {
      if (data) {
        const dataJ = JSON.stringify(data);
        localStorage.setItem('USER', dataJ);
        this.router.navigate(['/']);
      } else {
        this.usuarioService.logout();
        this.toastr.info('Você não tem permissão para entrar.');
      }
    }, error => {
      this.usuarioService.logout();
      this.toastr.error('Ocorreu um erro ao logar. Por favor entrar em contato com suporte.');
    });
  }

}
