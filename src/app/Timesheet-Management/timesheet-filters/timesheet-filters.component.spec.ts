import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetFiltersComponent } from './timesheet-filters.component';

describe('TimesheetFiltersComponent', () => {
  let component: TimesheetFiltersComponent;
  let fixture: ComponentFixture<TimesheetFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
