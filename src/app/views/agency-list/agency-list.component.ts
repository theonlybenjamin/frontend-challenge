import { Component, OnInit } from '@angular/core';
import { AgenciesFacade } from 'src/app/facades/agencies.facade';
import { IAgencyResponse } from 'src/app/interfaces/agency.interface';
import { AgenciesService } from 'src/app/services/agencies.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {

  public agencies: IAgencyResponse[];

  constructor(private facade: AgenciesFacade) {
    this.facade.getAgencies().subscribe((x) => {
      this.agencies = x;
    });
  }

  ngOnInit(): void {
  }

}
