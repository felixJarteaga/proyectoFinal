import { TestBed } from '@angular/core/testing';

import { DatosBBDDService } from './datos-bbdd.service';

describe('DatosBBDDService', () => {
  let service: DatosBBDDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosBBDDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
