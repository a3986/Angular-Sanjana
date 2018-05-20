import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() filterBy: string;
  // @Input() selectedRange: number[];
  @Input() componentConfig: any;

  @Output() onFilterChange = new EventEmitter<any>();

  constructor() { }

  onSliderChange($event) {
    this.onFilterChange.emit({
      "key": this.filterBy,
      "value": this.componentConfig.selectedRange
    });
  }

}
