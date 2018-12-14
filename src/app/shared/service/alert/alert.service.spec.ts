import { TestBed } from '@angular/core/testing';
import { AlertService } from './alert.service';
import {AppModule} from '../../../app.module';

describe('AlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule]
  }));

  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService);
    expect(service).toBeTruthy();
  });
});
