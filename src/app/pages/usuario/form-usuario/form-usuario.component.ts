import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html'
})
export class FormUsuarioComponent implements OnInit {

  buttons = [{ name: 'Lista', route: '/usuario' }];
  usuario: FormGroup;
  isSubmitted = false;
  disabledSubmit = false;
  id = null;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private toastr: ToastrService, 
    private route: ActivatedRoute) {
      this.form();
    }

  form() {
    this.usuario = this.formBuilder.group({
      id: null,
      nome: [null, [Validators.required]],
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    if (this.id) {
      this.usuarioService.getOne(this.id).subscribe(data => {
        this.usuario.patchValue(data);
      });
    }
  }

  save() {
    this.isSubmitted = true;

    if (!this.usuario.valid) {
      this.toastr.info('Preencha os campos obrigatórios.');
      return;
    }
    this.disabledSubmit = true;

    const usuario = _.cloneDeep(this.usuario.value);

    this.usuarioService.save(usuario).subscribe(response => {
      this.toastr.success('O usuario foi cadastrado com sucesso.');
      this.isSubmitted = false;
      this.disabledSubmit = false;

      if (!usuario.id) {
        this.form();
      }
    }, error => {
      this.disabledSubmit = false;
      this.toastr.error(error);
    });
  }

}
