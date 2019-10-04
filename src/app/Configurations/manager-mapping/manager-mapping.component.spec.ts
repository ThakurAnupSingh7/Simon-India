import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMappingComponent } from './manager-mapping.component';

describe('ManagerMappingComponent', () => {
  let component: ManagerMappingComponent;
  let fixture: ComponentFixture<ManagerMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
