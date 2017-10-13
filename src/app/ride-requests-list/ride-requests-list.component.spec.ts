import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideRequestsListComponent } from './ride-requests-list.component';

describe('RideRequestsListComponent', () => {
  let component: RideRequestsListComponent;
  let fixture: ComponentFixture<RideRequestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideRequestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
