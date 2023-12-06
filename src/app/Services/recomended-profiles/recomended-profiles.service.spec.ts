import { TestBed } from '@angular/core/testing';

import { RecomendedProfilesService } from './recomended-profiles.service';

describe('RecomendedProfilesService', () => {
  let service: RecomendedProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecomendedProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
