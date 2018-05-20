import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { DataService } from './data.service';
import { ImageFilterPipe } from './filter.pipe'
import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';
import { FilterComponent } from './filter/filter.component';

import { NouisliderModule } from 'ng2-nouislider';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    DetailedViewComponent,
    ImageFilterPipe,
    FilterComponent,
    SliderComponent,
    SelectBoxComponent,
    ToggleButtonComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NouisliderModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    FormsModule
  ],
  providers: [DataService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
