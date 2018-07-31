import { TestBed, inject } from '@angular/core/testing';

import { CompotitionsService } from './compotitions.service';

describe('CompotitionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompotitionsService]
    });
  });

  it('should be created', inject([CompotitionsService], (service: CompotitionsService) => {
    expect(service).toBeTruthy();
  }));
});
