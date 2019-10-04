import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpCodesManagementComponent } from './dp-codes-management.component';

describe('DpCodesManagementComponent', () => {
  let component: DpCodesManagementComponent;
  let fixture: ComponentFixture<DpCodesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpCodesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpCodesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
