import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AgenciesFacade } from './agencies.facade';
import { AgenciesService } from '../services/agencies.service';

describe('AgenciesService', () => {
    let service: AgenciesService;
    let http: HttpTestingController;

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
