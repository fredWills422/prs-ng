import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  sortColumn: string = 'id';
  ascOrder: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  sort(column: string) : void {
    if (this.sortColumn === column){
      this.ascOrder = !this.ascOrder;
      return;
    }
    this.ascOrder = true;
    this.sortColumn = column;
  }

}
