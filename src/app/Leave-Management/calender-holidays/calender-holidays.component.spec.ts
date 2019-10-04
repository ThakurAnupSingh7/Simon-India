import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderHolidaysComponent } from './calender-holidays.component';

describe('CalenderHolidaysComponent', () => {
  let component: CalenderHolidaysComponent;
  let fixture: ComponentFixture<CalenderHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
