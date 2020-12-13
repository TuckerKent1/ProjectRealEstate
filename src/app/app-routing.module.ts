import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './pages/admin/admin.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {PropertyDetailsComponent} from './property/property-details/property-details.component';
import {PropertyFormComponent} from './property/property-form/property-form.component';
import {PropertyListingComponent} from './property/property-listing/property-listing.component';

const routes: Routes = [
  {path: "", component: AdminComponent},
  {path: "admin", component: AdminComponent},
  {path: "properties", component: PropertyListingComponent},
  {path: "properties/:id", component: PropertyDetailsComponent},
  {path: "form", component: PropertyFormComponent},
  {path: "form/:id", component: PropertyFormComponent},
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
