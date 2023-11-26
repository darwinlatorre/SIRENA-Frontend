import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSideBarCoordComponent } from './nav-side-bar-coord.component';

describe('NavSideBarCoordComponent', () => {
  let component: NavSideBarCoordComponent;
  let fixture: ComponentFixture<NavSideBarCoordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSideBarCoordComponent]
    });
    fixture = TestBed.createComponent(NavSideBarCoordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
