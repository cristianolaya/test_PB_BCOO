import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {CardComponent} from './components/card/card.component';
import {SharedModule} from '../../shared/shared.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ DashboardComponent, CardComponent ]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  }));

  it('should create the dashboard component', () => {
    expect(component).toBeDefined();
  });
});
