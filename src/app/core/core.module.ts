import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './layout/main/main.component';
import { BoxTitleComponent } from './box-title/box-title.component';
import { ButtonActionComponent } from './button-action/button-action.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmService } from './confirm/confirm.service';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    SidebarLeftComponent,
    MainComponent,
    BoxTitleComponent,
    ButtonActionComponent,
    ConfirmComponent
  ],
  entryComponents: [ ConfirmComponent ],
  declarations: [
    HeaderComponent,
    SidebarLeftComponent,
    MainComponent,
    BoxTitleComponent,
    ButtonActionComponent,
    ConfirmComponent,
  ],
  providers: [
    ConfirmService
  ]
})
export class CoreModule { }
