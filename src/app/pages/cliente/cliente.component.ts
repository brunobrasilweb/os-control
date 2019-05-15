import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmService } from '../../core/confirm/confirm.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {

  buttons = [];
  rows = [];
  
  constructor(private clienteService: ClienteService, public usuarioService: UsuarioService,
    private confirmService: ConfirmService, private toastr: ToastrService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.clienteService.lista().subscribe(response => {
      this.rows = response._embedded.lista;
    });
  }

  delete(row) {
    this.confirmService.confirm('Confirmação', 'Deseja confirmar o registro?').then(confirm => {
      if (confirm) {
        this.clienteService.delete(row.idcliente).subscribe(response => {
          this.list();
        }, error => {
          this.toastr.error('Não foi possível deletar. O registro está sendo usado.');
        });
      }
    });
  }

}
