import { TestBed } from '@angular/core/testing';

import { AgencyResolver } from './agency.resolver';

describe('AgencyResolver', () => {
  let resolver: AgencyResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AgencyResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
