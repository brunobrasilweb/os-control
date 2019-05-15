import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-title',
  templateUrl: './box-title.component.html'
})
export class BoxTitleComponent implements OnInit {

  @Input() title: string;
  @Input() buttons: any;

  constructor() { }

  ngOnInit() {
  }

}
