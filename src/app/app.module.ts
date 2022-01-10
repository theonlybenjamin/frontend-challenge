import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyListComponent } from './views/agency-list/agency-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AgencyComponent } from './components/agency/agency.component';
import { HttpClientModule } from '@angular/common/http';
import { AgencyDetailComponent } from './views/agency-detail/agency-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AgencyListComponent,
    HeaderComponent,
    AgencyComponent,
    AgencyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({ apiKey: environment.googleKey})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
