import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  customFilters: any[] = [
    { name: 'All', value: 'all', checked: true },
    { name: 'Available', value: 'available', checked: false },
    { name: 'Not Available', value: 'unavailable', checked: false },
    { name: 'Bestseller', value: 'bestseller', checked: false }
  ]

  priceFilters: any[] = [
    { name: 'All', value: 'all', checked: true },
    { name: 'Price > 30.000', value: 'more_30000', checked: false },
    { name: 'Price < 10.000', value: 'less_10000', checked: false }
  ]

  originalData: any = [];
  filteredProducts: any = [];
  mainFilter: any = {};
  constructor(private dataService: DataService) { }

  applyFilters(filters: any[]) {
    let productsSource = this.originalData.products.slice(0);
    this.filteredProducts = productsSource.filter(product => {
      for (let i = 0; i < filters.length; i++) {
        switch (filters[i].type) {
          case 'eq': {
            if (filters[i].value !== 'all' && filters[i].value != product[filters[i].key])
              return false;
            else break;
          }
          case 'multi': {
            if (!filters[i].value["all"]  && !filters[i].value[product[filters[i].key]])
              return false;//chala abhi
            else break;
          }
          case 'range': {
            if (product[filters[i].key] < filters[i].value[0] || product[filters[i].key] > filters[i].value[1])
              return false;
            else break;
          }
        }
      }
      return true;
    });
  }

  // updateProducts(filter) {
  //   let productsSource = this.originalData.products
  //   let prevProducts = this.products
  //   let filterAllData = true
  //   if ((filter.type == 'search' && filter.change == 1) || (filter.type == 'category' && filter.change == -1)) {
  //     productsSource = this.products
  //     filterAllData = false
  //   }
  //   //console.log('filtering ' + productsSource.length + ' products')

  //   this.products = productsSource.filter(product => {
  //     //Filter by search
  //     /* if(filterAllData || filter.type=='search'){
  //       if (!product.name.match(new RegExp(this.mainFilter.search, 'i'))){
  //         return false;
  //       }
  //     } */

  //     //Filter by categories
  //     if (/* filterAllData ||  */filter.type == 'category') {
  //       let passCategoryFilter = false
  //       product.categories.forEach(product_category => {
  //         if (!passCategoryFilter) {
  //           passCategoryFilter = this.mainFilter.categories.reduce((found, category) => {
  //             return found || product_category == category.categori_id
  //           }, false)
  //         }
  //       })
  //       if (!passCategoryFilter) {
  //         return false
  //       }
  //     }

  //     //Filter by custom filters
  //     if (/* filterAllData ||  */filter.type == 'custom') {
  //       let passCustomFilter = false
  //       let customFilter = this.mainFilter.customFilter.value
  //       if (customFilter == 'all') {
  //         passCustomFilter = true;
  //       } else if (customFilter == 'available' && product.available) {
  //         passCustomFilter = true;
  //       } else if (customFilter == 'unavailable' && !product.available) {
  //         passCustomFilter = true;
  //       } else if (customFilter == 'bestseller' && product.best_seller) {
  //         passCustomFilter = true;
  //       }
  //       if (!passCustomFilter) {
  //         return false
  //       }
  //     }

  //     //Filter by price filters
  //     if (/* filterAllData ||  */filter.type == 'price') {
  //       let passPriceFilter = false
  //       let customFilter = this.mainFilter.priceFilter.value
  //       let productPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'))
  //       if (customFilter == 'all') {
  //         passPriceFilter = true;
  //       } else if (customFilter == 'more_30000' && productPrice > 30000) {
  //         passPriceFilter = true;
  //       } else if (customFilter == 'less_10000' && productPrice < 10000) {
  //         passPriceFilter = true;
  //       }
  //       if (!passPriceFilter) {
  //         return false
  //       }
  //     }

  //     return true
  //   })

  //   //If the number of products increased after the filter has been applied then sort again
  //   //If the number of products remained equal, there's a high chance that the items have been reordered.
  //   // if(prevProducts.length <= this.products.length && this.products.length>1){
  //   //   this.sortProducts(this.currentSorting)
  //   // }

  //   //These two types of filters usually add new data to the products showcase so a sort is necessary
  //   // if(filter.type == 'custom' || filter.type == 'price'){
  //   //   this.sortProducts(this.currentSorting)
  //   // }
  // }

  ngOnInit() {


    //this.dataService.getData().then(data => {

    this.originalData = this.dataService.getData();
    // this.mainFilter = {
    //   search: '',
    //   categories: this.originalData.categories.slice(0),
    //   customFilter: this.customFilters[0],
    //   priceFilter: this.priceFilters[0]
    // }

    // Make a deep copy of the original data to keep it immutable
    this.filteredProducts = this.originalData.products.slice(0);
    // this.sortProducts('name')
    // })
  }

}
