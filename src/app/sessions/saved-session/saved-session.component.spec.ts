import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSessionComponent } from './saved-session.component';

describe('SavedSessionComponent', () => {
  let component: SavedSessionComponent;
  let fixture: ComponentFixture<SavedSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
