import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AgenciesFacade } from './agencies.facade';
import { AgenciesService } from '../services/agencies.service';

describe('AgenciesService', () => {
    let service: AgenciesService;
    let http: HttpTestingController;

    const agencies = [
        {
            address: 'Las Flores de Primavera 1487',
            code: 'A0',
            department: 'Lima',
            district: 'San Juan De Lurigancho',
            latitude: -77.01232817,
            longitude: -12.0046896,
            name: 'Las Flores',
            province: 'Lima'
        }
    ];

    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                AgenciesService,
                AgenciesFacade,
                HttpClientTestingModule
            ]
        })
    );

    beforeEach(() => {
        service = TestBed.get(AgenciesService);
        http = TestBed.get(HttpTestingController);
    });

    it('Should inject the facade', () => {
        expect(service).toBeTruthy();
    });
});
