import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtestsComponent } from './viewtests.component';

describe('ViewtestsComponent', () => {
  let component: ViewtestsComponent;
  let fixture: ComponentFixture<ViewtestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
