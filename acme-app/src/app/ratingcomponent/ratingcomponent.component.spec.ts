import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingcomponentComponent } from './ratingcomponent.component';

describe('RatingcomponentComponent', () => {
  let component: RatingcomponentComponent;
  let fixture: ComponentFixture<RatingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
