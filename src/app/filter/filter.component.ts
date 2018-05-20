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
  
  

  /* categoryFilter: any = {};

  onEqFilterChange($event, selectedBase) {
    console.log(selectedBase);
  }
  onPriceFilterChange($event) {
    console.log(this.someRange);
  }
  onCategoryFilterChange($event) {
    console.log(this.categoryFilter);
  } */

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



  /*   reset(customFilters, priceFilters) {
      this.customFilters = customFilters
      this.priceFilters = priceFilters
      this.showFilters = false
      setTimeout(() => {
        this.showFilters = true
      });
    }
   */
  // @Input() priceFilter: PriceFilter;
  // @Input() categoryFilter?: string = "veg";
  // @Input() typeFilter: string = "all";
  // @Input() baseFilter: string = "all";

  // @Output() onFilterChange = new EventEmitter<any>();

  // constructor() { }
  // constructor(private gallery: GalleryComponent) { }

  /* onInputChange($event, filter, type) {
    let change = $event.target.checked ? 1 : -1
    this.onFilterChange.emit({
      type: type,
      filter: filter,
      isChecked: $event.target.checked,
      change: change
    })
  }

  @Input()
  someRange = [200, 600]; */

  /* @Input()
  someRange2config: any = {
    behaviour: 'drag',
    connect: true,
    // margin: 25,
    // limit: 25, // NOTE: overwritten by [limit]="10"
    tooltips: [true, true]
  }; */

  /* onChange(event) {

  } */

  // ngOnChanges() {
  //   // this.gallery.applyFilter(this.priceFilter, this.categoryFilter, this.typeFilter, this.baseFilter);
  // }

}
