import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideRequestViewComponent } from './ride-request-view.component';

describe('RideRequestViewComponent', () => {
  let component: RideRequestViewComponent;
  let fixture: ComponentFixture<RideRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
