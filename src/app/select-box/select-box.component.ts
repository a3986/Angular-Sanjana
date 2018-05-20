import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  @Input() filterBy: string;
  @Input() componentConfig: any;
  @Input() selectedValue: string;
  @Input() itemList: any[];

  @Output() onFilterChange = new EventEmitter<any>();

  selectedDisplayValue: string;

  constructor() { }

  onSelectBoxChange($event, selected: any) {
    this.selectedValue = selected.code;
    this.selectedDisplayValue = selected.name;
    this.onFilterChange.emit({
      "key": this.filterBy,
      "value": this.selectedValue
    });
  }

  ngOnInit() {
    this.selectedDisplayValue = this.componentConfig.defaultText;
  }
}
