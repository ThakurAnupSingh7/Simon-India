import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTimesheetComponent } from './approved-timesheet.component';

describe('ApprovedTimesheetComponent', () => {
  let component: ApprovedTimesheetComponent;
  let fixture: ComponentFixture<ApprovedTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
