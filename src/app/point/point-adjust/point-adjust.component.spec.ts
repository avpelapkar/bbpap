import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointAdjustComponent } from './point-adjust.component';

describe('PointAdjustComponent', () => {
  let component: PointAdjustComponent;
  let fixture: ComponentFixture<PointAdjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointAdjustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
