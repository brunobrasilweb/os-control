import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ClienteService } from '../../../services/cliente.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html'
})
export class FormClienteComponent implements OnInit {

  buttons = [{ name: 'Lista', route: '/cliente' }];
  cliente: FormGroup;
  isSubmitted = false;
  disabledSubmit = false;
  id = null;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private toastr: ToastrService, 
    private route: ActivatedRoute) {
      this.form();
    }

  form() {
    this.cliente = this.formBuilder.group({
      id: null,
      nome: [null, [Validators.required]],
      email: [null, [Validators.required]],
      telefone: null
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    if (this.id) {
      this.clienteService.getOne(this.id).subscribe(data => {
        this.cliente.patchValue(data);
      });
    }
  }

  save() {
    this.isSubmitted = true;

    if (!this.cliente.valid) {
      this.toastr.info('Preencha os campos obrigatórios.');
      return;
    }
    this.disabledSubmit = true;

    const cliente = _.cloneDeep(this.cliente.value);

    this.clienteService.save(cliente).subscribe(response => {
      this.toastr.success('O cliente foi cadastrado com sucesso.');
      this.isSubmitted = false;
      this.disabledSubmit = false;

      if (!cliente.id) {
        this.form();
      }
    }, error => {
      this.disabledSubmit = false;
      this.toastr.error(error);
    });
  }

}
