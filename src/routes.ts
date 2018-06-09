import { Routes } from "@angular/router"
import { GalleryComponent } from "./app/gallery/gallery.component";
import { DetailedViewComponent } from "./app/detailed-view/detailed-view.component";

export const appRoutes:Routes = [
  { path: "", component: GalleryComponent },
  { path: "image/:id", component: DetailedViewComponent }
]