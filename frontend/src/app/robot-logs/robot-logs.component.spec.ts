import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotLogsComponent } from './robot-logs.component';

describe('RobotLogsComponent', () => {
  let component: RobotLogsComponent;
  let fixture: ComponentFixture<RobotLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
