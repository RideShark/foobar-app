import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPostViewComponent } from './trip-post-view.component';

describe('TripPostViewComponent', () => {
  let component: TripPostViewComponent;
  let fixture: ComponentFixture<TripPostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
