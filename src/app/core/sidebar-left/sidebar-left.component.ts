import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html'
})
export class SidebarLeftComponent implements OnInit {

  public isCollapsed = false;
  
  constructor() { }

  ngOnInit() {
  
  } 

}
