import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  @Input()
  product: any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
   // this.image = this.dataService.getImage(+this.route.snapshot.params['id'])
  }
}