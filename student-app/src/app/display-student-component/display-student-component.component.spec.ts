import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStudentComponentComponent } from './display-student-component.component';

describe('DisplayStudentComponentComponent', () => {
  let component: DisplayStudentComponentComponent;
  let fixture: ComponentFixture<DisplayStudentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStudentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStudentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
