import { TestBed } from '@angular/core/testing';

import { Consumption } from './consumption';

describe('Consumption', () => {
  let service: Consumption;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Consumption);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
