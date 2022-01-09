import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAgencyResponse } from '../interfaces/agency.interface';
import { AgenciesService } from '../services/agencies.service';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
export class AgenciesFacade {
    constructor(
        private agenciesService: AgenciesService) {}

    getAgency(distrito: string): Observable<IAgencyResponse> {
       return this.getAgencies().pipe(
           map(x => x.find(x => x.distrito === distrito))
       )
    }

    getAgencies(): Observable<IAgencyResponse[]> {
        const agencies = this.agenciesService.getAgenciesFromStorage();
        return agencies ? of(agencies) : this.agenciesService.getAgencies();
    }

    public updateAgency(agency: IAgencyResponse) {
        this.getAgencies().subscribe(agencies => {
            const index = agencies.findIndex((x, indice) => x.distrito === agency.distrito);
            console.log(index);
            agencies[index] = agency;
            this.agenciesService.saveAgenciesOnStorage(agencies);
        })
    }
}
