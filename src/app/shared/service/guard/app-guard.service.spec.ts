import { TestBed } from '@angular/core/testing';

import { AppGuardService } from './app-guard.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule]
  }));

  it('should be created', () => {
    const service: AppGuardService = TestBed.get(AppGuardService);
    expect(service).toBeTruthy();
  });
});
