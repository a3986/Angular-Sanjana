import { Component, OnChanges, Input } from '@angular/core';
import { DataService } from '../data.service';
import { PriceFilter } from '../price-filter.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  title = 'Recent Photos';
  visibleImages: any[] = [];
  @Input() filterBy?: string = 'all';
  @Input() products: any[];
  
  // constructor(private dataService: DataService) {
  //   this.visibleImages = this.dataService.getImages();
  //  }

  //  ngOnChanges() {
  //    this.visibleImages = this.dataService.getImages();
  //  }

  //  public applyFilter(priceFilter: PriceFilter, categoryFilter: string, typeFilter: string, baseFilter: string) {
  //   this.visibleImages = this.dataService.getImages();
  //  }
}
