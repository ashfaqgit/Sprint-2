import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcentreComponent } from './viewcentre.component';

describe('ViewcentreComponent', () => {
  let component: ViewcentreComponent;
  let fixture: ComponentFixture<ViewcentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
