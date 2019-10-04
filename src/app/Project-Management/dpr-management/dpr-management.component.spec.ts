import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DprManagementComponent } from './dpr-management.component';

describe('DprManagementComponent', () => {
  let component: DprManagementComponent;
  let fixture: ComponentFixture<DprManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DprManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DprManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
