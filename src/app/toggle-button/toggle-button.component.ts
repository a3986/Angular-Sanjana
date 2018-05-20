import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {

  @Input() filterBy: string;
  @Input() selectedItems: string[];
  @Input() itemList: any[];
  @Input() componentConfig: any;

  @Output() onFilterChange = new EventEmitter<any>();

  currentSelection: any = {};

  constructor() { }

  onToggleButtonChange($event, value: string) {

    this.selectedItems = [];
    for (let item in this.currentSelection) {
      if (this.currentSelection[item])
        this.selectedItems.push(item)
    }

    this.onFilterChange.emit({
      "key": this.filterBy,
      "value": (this.selectedItems.length == 0 || this.selectedItems.length == this.itemList.length) ? { "all": true } : this.currentSelection
    });
  }
}
