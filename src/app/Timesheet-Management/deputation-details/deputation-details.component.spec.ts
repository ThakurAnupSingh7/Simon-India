import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputationDetailsComponent } from './deputation-details.component';

describe('DeputationDetailsComponent', () => {
  let component: DeputationDetailsComponent;
  let fixture: ComponentFixture<DeputationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeputationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
