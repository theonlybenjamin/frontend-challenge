import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenciesFacade } from 'src/app/facades/agencies.facade';
import { IAgencyResponse } from 'src/app/interfaces/agency.interface';

@Component({
  selector: 'app-agency-detail',
  templateUrl: './agency-detail.component.html',
  styleUrls: ['./agency-detail.component.scss']
})
export class AgencyDetailComponent {

  public agency: IAgencyResponse;
  public agencyForm: FormGroup;
  public lat: number;
  public lon: number;
  public zoom = 1;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private facade: AgenciesFacade
  ) {
    this.agency = this.route.snapshot.data.agency;
    this.agencyForm = new FormGroup({
      agencia: new FormControl(this.agency.agencia, Validators.required),
      direccion: new FormControl(this.agency.direccion, Validators.required),
      distrito: new FormControl(this.agency.distrito, Validators.required),
      departamento: new FormControl(this.agency.departamento, Validators.required),
      provincia: new FormControl(this.agency.provincia, Validators.required),
      lat: new FormControl(this.agency.lat, Validators.required),
      lon: new FormControl(this.agency.lon, Validators.required)
  });
  this.lat = this.agency.lat;
  this.lon = this.agency.lon;
  }

  public updateAgency() {
    if (this.agencyForm.valid){
      this.facade.updateAgency(this.agencyForm.value);
      this.router.navigate(['/agencias']);
    }
  }

  markerDragEnd({lat, lng}: {lat: number, lng: number}): void {
    this.agencyForm.get('lat').setValue(lat);
    this.agencyForm.get('lon').setValue(lng);
}

}
