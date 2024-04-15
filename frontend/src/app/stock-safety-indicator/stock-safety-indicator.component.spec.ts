import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSafetyIndicatorComponent } from './stock-safety-indicator.component';

describe('StockSafetyIndicatorComponent', () => {
  let component: StockSafetyIndicatorComponent;
  let fixture: ComponentFixture<StockSafetyIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSafetyIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSafetyIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
