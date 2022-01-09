import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAgencyResponse } from '../interfaces/agency.interface';
import { Observable } from 'rxjs';
import { Endpoints } from '../config/endpoints.enum';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  constructor(private http: HttpClient) { }

  public getAgencies(): Observable<IAgencyResponse[]> {
    return this.http.get<IAgencyResponse[]>(Endpoints.LIST_AGENCIES).pipe(
      tap(x => this.saveAgenciesOnStorage(x)),
      take(1)
    );
  }

  public saveAgenciesOnStorage(agencies: IAgencyResponse[]) {
    localStorage.setItem('agencies', JSON.stringify(agencies));
  }

  public getAgenciesFromStorage(): IAgencyResponse[] {
    return JSON.parse(localStorage.getItem('agencies')) as IAgencyResponse[];
  }
}
