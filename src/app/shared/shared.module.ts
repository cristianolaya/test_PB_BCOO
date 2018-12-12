import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppGuardService } from './service/guard/app-guard.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './service/alert/alert.service';
import { AuthService } from './service/auth/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './service/customer/customer.service';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AppGuardService,
    AlertService,
    AuthService,
    CustomerService
  ]
})
export class SharedModule { }
