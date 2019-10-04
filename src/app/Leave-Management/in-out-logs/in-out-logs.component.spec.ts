import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutLogsComponent } from './in-out-logs.component';

describe('InOutLogsComponent', () => {
  let component: InOutLogsComponent;
  let fixture: ComponentFixture<InOutLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOutLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
