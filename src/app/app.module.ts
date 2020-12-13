import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {PropertyListingComponent} from './property/property-listing/property-listing.component';
import {PropertyDetailsComponent} from './property/property-details/property-details.component';
import {AdminComponent} from './pages/admin/admin.component';
import {PropertyFormComponent} from './property/property-form/property-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    PropertyListingComponent,
    PropertyDetailsComponent,
    AdminComponent,
    PropertyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
