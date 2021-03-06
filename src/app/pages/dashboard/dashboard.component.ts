import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../shared/service/customer/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  products = [
    {
      type: 'CUENTAS',
      name: 'CUENTAS',
      items: [
        {
          type: 'SDA',
          name: 'Cuenta de ahorro',
          number: '2345 5674 2365 2341',
          amount: 300000.00
        },
        {
          type: 'DDA',
          name: 'Cuenta corriente',
          number: '2345 5674 2365 2342',
          amount: -1300000.00
        }
      ]
    },
    {
      type: 'tc',
      name: 'Tarjetas de crédito',
      items: [
        {
          type: 'visa',
          name: 'Tarjeta de crédito',
          number: '**** **** **** 8745',
          amount: 300000.00
        },
        {
          type: 'mastercard',
          name: 'Tarjeta de crédito',
          number: '**** **** **** 8743',
          amount: 130000.20
        }
      ]
    }
  ];

  constructor( private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getProducts()
    .subscribe( products => {
      console.log(products);
      this.products = products;
    });
  }

}
