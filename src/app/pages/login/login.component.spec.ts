import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {SharedModule} from '../../shared/shared.module';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, SharedModule, ReactiveFormsModule, RouterModule ],
      declarations: [ LoginComponent ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  }));

  it('should create the login component', () => {
    expect(component).toBeDefined();
  });
});
