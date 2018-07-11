import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSensorsComponent } from './active-sensors.component';

describe('ActiveSensorsComponent', () => {
  let component: ActiveSensorsComponent;
  let fixture: ComponentFixture<ActiveSensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
