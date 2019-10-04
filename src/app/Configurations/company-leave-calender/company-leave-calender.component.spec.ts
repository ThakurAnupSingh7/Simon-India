import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLeaveCalenderComponent } from './company-leave-calender.component';

describe('CompanyLeaveCalenderComponent', () => {
  let component: CompanyLeaveCalenderComponent;
  let fixture: ComponentFixture<CompanyLeaveCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyLeaveCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLeaveCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
