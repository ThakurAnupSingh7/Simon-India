import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailedLeaveComponent } from './availed-leave.component';

describe('AvailedLeaveComponent', () => {
  let component: AvailedLeaveComponent;
  let fixture: ComponentFixture<AvailedLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailedLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
