import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDprMappingComponent } from './emp-dpr-mapping.component';

describe('EmpDprMappingComponent', () => {
  let component: EmpDprMappingComponent;
  let fixture: ComponentFixture<EmpDprMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDprMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDprMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
