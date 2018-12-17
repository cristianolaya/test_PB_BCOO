import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { SharedModule } from '../../shared.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule, RouterTestingModule ]
    });
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
  }));

  it('should create the alert component', () => {
    expect(component).toBeDefined();
  });
});
