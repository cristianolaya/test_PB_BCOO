import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  products = [
    {
      type: 'cuenta',
      name: 'Cuentas',
      items: [
        {
          type: 'SDA',
          name: 'Cuenta de ahorro',
          numero: '2345 5674 2365 2341',
          amount: 300000.00
        },
        {
          type: 'DDA',
          name: 'Cuenta corriente',
          numero: '2345 5674 2365 2342',
          amount: 1300000.00
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
          numero: '**** **** **** 8745',
          amount: 300000.00
        },
        {
          type: 'mastercard',
          name: 'Tarjeta de crédito',
          numero: '**** **** **** 8743',
          amount: 130000.20
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
