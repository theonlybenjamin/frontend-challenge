import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyResolver } from './resolver/agency.resolver';
import { AgencyDetailComponent } from './views/agency-detail/agency-detail.component';
import { AgencyListComponent } from './views/agency-list/agency-list.component';

const routes: Routes = [
  {
    path: 'agencias',
    component: AgencyListComponent,
  },
  {
    path: 'agencia/:distrito',
    component: AgencyDetailComponent,
    resolve: { agency: AgencyResolver }
  },
  {
    path: '',
    redirectTo: 'agencias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
