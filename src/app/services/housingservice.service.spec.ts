import { TestBed } from '@angular/core/testing';

import { HousingserviceService } from './housingservice.service';

describe('HousingserviceService', () => {
  let service: HousingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
