import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  }));

  it('should create the card component', () => {
    expect(component).toBeTruthy();
  });
});
