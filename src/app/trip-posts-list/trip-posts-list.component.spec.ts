import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPostsListComponent } from './trip-posts-list.component';

describe('TripPostsListComponent', () => {
  let component: TripPostsListComponent;
  let fixture: ComponentFixture<TripPostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
