import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() product: any;
    @Input() type: string;
    constructor() {}

    ngOnInit(): void {}
}
