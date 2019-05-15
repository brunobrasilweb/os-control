import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmService } from '../../core/confirm/confirm.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  buttons = [];
  rows = [];
  
  constructor(private usuarioService: UsuarioService, private confirmService: ConfirmService, private toastr: ToastrService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.usuarioService.lista().subscribe(response => {
      this.rows = response._embedded.lista;
    });
  }

  delete(row) {
    this.confirmService.confirm('Confirmação', 'Deseja confirmar o registro?').then(confirm => {
      if (confirm) {
        this.usuarioService.delete(row.idusuario).subscribe(response => {
          this.list();
        }, error => {
          this.toastr.error('Não foi possível deletar. O registro está sendo usado.');
        });
      }
    });
  }

}
