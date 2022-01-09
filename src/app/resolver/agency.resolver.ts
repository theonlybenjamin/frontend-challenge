import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AgenciesFacade } from '../facades/agencies.facade';
import { IAgencyResponse } from '../interfaces/agency.interface';

@Injectable({
  providedIn: 'root'
})
export class AgencyResolver implements Resolve<IAgencyResponse> {
  constructor(private agenciesFacade: AgenciesFacade) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAgencyResponse> {
    console.log(route.params);
    return this.agenciesFacade.getAgency(route.params.distrito);
  }
}
