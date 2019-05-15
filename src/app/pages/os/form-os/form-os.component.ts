import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { OsService } from '../../../services/os.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import * as moment from 'moment-timezone';
import { ClienteService } from '../../../services/cliente.service';
import { ServicoService } from '../../../services/servico.service';

@Component({
  selector: 'app-form-os',
  templateUrl: './form-os.component.html'
})
export class FormOsComponent implements OnInit {

  buttons = [{ name: 'Lista', route: '/os' }];
  os: FormGroup;
  isSubmitted = false;
  disabledSubmit = false;
  id = null;
  clientes = [];
  servicos = [];

  constructor(private formBuilder: FormBuilder, private osService: OsService, private toastr: ToastrService, 
    private route: ActivatedRoute, private clienteService: ClienteService, private servicosService: ServicoService) {
      this.form();
      this.clienteList();
      this.servicoList();
    }

  form() {
    this.os = this.formBuilder.group({
      id: null,
      cliente: new FormControl(null, Validators.required),
      servico: new FormControl(null, Validators.required),
      dtentrada: [null, [Validators.required]],
      descproblema: [null, [Validators.required]],
      descsolucao: [null, [Validators.required]]
    });
  }

  clienteList() {
    this.clienteService.lista().subscribe(data => {
      this.clientes = data._embedded.lista;
    });      
  }
  
  servicoList() {
    this.servicosService.lista().subscribe(data => {
      this.servicos = data._embedded.lista;
    });      
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    if (this.id) {
      this.osService.getOne(this.id).subscribe(data => {
        this.os.patchValue(data);
      });
    }
  }

  save() {
    this.isSubmitted = true;

    if (!this.os.valid) {
      this.toastr.info('Preencha os campos obrigatórios.');
      return;
    }
    this.disabledSubmit = true;

    const os = _.cloneDeep(this.os.value);
    const dataEntrega = moment.tz(os.dtentrada, null);
    os.dtentrada = dataEntrega.format('YYYY-MM-DD');


    this.osService.save(os).subscribe(response => {
      this.toastr.success('O os foi cadastrado com sucesso.');
      this.isSubmitted = false;
      this.disabledSubmit = false;

      if (!os.idos) {
        this.form();
      }
    }, error => {
      this.disabledSubmit = false;
      this.toastr.error(error);
    });
  }

}
