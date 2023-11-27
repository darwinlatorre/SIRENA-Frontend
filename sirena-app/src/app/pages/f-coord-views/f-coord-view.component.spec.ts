import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCoordViewComponent } from './f-coord-view.component';

describe('FCoordViewComponent', () => {
  let component: FCoordViewComponent;
  let fixture: ComponentFixture<FCoordViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FCoordViewComponent]
    });
    fixture = TestBed.createComponent(FCoordViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
