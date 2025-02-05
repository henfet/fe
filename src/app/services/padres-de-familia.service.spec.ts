import { TestBed } from '@angular/core/testing';

import { PadresDeFamiliaService } from './padres-de-familia.service';

describe('PadresDeFamiliaService', () => {
  let service: PadresDeFamiliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadresDeFamiliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
