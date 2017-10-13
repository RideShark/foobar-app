import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideRequestEditFormComponent } from './ride-request-edit-form.component';

describe('RideRequestEditFormComponent', () => {
  let component: RideRequestEditFormComponent;
  let fixture: ComponentFixture<RideRequestEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideRequestEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideRequestEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
