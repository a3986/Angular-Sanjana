import { Component, OnChanges, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { PriceFilter, Category } from '../price-filter.model';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() filteringOptions: any = [];

  @Output()
  applyFilters = new EventEmitter<any>()

  constructor() { }

  appliedFilters: any = [];
  currentFilter: any = undefined;
  replaceCurrentFilterValue(filter: any) {
    this.currentFilter = this.appliedFilters.find(item => {
      return item.key === filter.key;
    });
    if (this.currentFilter) {
      this.currentFilter["value"] = filter.value;
      return true;
    } else {
      return false;
    }
  }
  /* onEqTypeFilterChange(filter: any) {
    if (!this.replaceCurrentFilterValue(filter)) {
      this.appliedFilters.push({
        "key": filter.key,
        "value": filter.value,
        "type": "eq"
      });
    }
    this.applyFilters.emit(this.appliedFilters);
  }
  onMultiTypeFilterChange(filter: any) {
    if (!this.replaceCurrentFilterValue(filter)) {
      this.appliedFilters.push({
        "key": filter.key,
        "value": filter.value,
        "type": "multi"
      });
    }
    this.applyFilters.emit(this.appliedFilters);
  }
  onRangeTypeFilterChange(filter: any) {
    if (!this.replaceCurrentFilterValue(filter)) {
      this.appliedFilters.push({
        "key": filter.key,
        "value": filter.value,
        "type": "range"
      });
    }
    this.applyFilters.emit(this.appliedFilters);
  } */
  eventMap: any = {
    "eq": function onEqTypeFilterChange(filter: any) {
      if (!this.replaceCurrentFilterValue(filter)) {
        this.appliedFilters.push({
          "key": filter.key,
          "value": filter.value,
          "type": "eq"
        });
      }
      this.applyFilters.emit(this.appliedFilters);
    }.bind(this),
    "multi": function onMultiTypeFilterChange(filter: any) {
      if (!this.replaceCurrentFilterValue(filter)) {
        this.appliedFilters.push({
          "key": filter.key,
          "value": filter.value,
          "type": "multi"
        });
      }
      this.applyFilters.emit(this.appliedFilters);
    }.bind(this),
    "range": function onRangeTypeFilterChange(filter: any) {
      if (!this.replaceCurrentFilterValue(filter)) {
        this.appliedFilters.push({
          "key": filter.key,
          "value": filter.value,
          "type": "range"
        });
      }
      this.applyFilters.emit(this.appliedFilters);
    }.bind(this)
  };
}