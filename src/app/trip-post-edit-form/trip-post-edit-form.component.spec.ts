import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPostEditFormComponent } from './trip-post-edit-form.component';

describe('TripPostEditFormComponent', () => {
  let component: TripPostEditFormComponent;
  let fixture: ComponentFixture<TripPostEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPostEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPostEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
