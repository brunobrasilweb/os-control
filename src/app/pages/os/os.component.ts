import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmService } from '../../core/confirm/confirm.service';
import { OsService } from '../../services/os.service';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html'
})
export class OsComponent implements OnInit {

  buttons = [];
  rows = [];
  
  constructor(private osService: OsService, public usuarioService: UsuarioService,
    private confirmService: ConfirmService, private toastr: ToastrService) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.osService.lista().subscribe(response => {
      this.rows = response._embedded.lista;
    });
  }

  delete(row) {
    this.confirmService.confirm('Confirmação', 'Deseja confirmar o registro?').then(confirm => {
      if (confirm) {
        this.osService.delete(row.id).subscribe(response => {
          this.list();
        }, error => {
          this.toastr.error('Não foi possível deletar. O registro está sendo usado.');
        });
      }
    });
  }

}
