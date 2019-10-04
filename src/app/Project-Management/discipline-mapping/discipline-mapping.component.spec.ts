import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineMappingComponent } from './discipline-mapping.component';

describe('DisciplineMappingComponent', () => {
  let component: DisciplineMappingComponent;
  let fixture: ComponentFixture<DisciplineMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplineMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplineMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
