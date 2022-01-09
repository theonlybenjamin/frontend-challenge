import { Component, Input, OnInit } from '@angular/core';
import { IAgencyResponse } from 'src/app/interfaces/agency.interface';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent {

  @Input() agency: IAgencyResponse;
  public iconClass: string;
  constructor() {
    this.randomIcon();
  }

  randomIcon(): void {
    const iconArray = ['university', 'archive', 'heart', 'user'];
    var radIcon = Math.floor(Math.random()*(iconArray.length));
    this.iconClass = 'fa fa-' + iconArray[radIcon];
  }

}
