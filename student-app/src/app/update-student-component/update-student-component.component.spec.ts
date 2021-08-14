import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentComponentComponent } from './update-student-component.component';

describe('UpdateStudentComponentComponent', () => {
  let component: UpdateStudentComponentComponent;
  let fixture: ComponentFixture<UpdateStudentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
