import { TestBed } from '@angular/core/testing';

import { Productivity } from './productivity';

describe('Productivity', () => {
  let service: Productivity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productivity);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
