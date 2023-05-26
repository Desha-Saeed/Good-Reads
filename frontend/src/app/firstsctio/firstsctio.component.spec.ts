import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstsctioComponent } from './firstsctio.component';

describe('FirstsctioComponent', () => {
  let component: FirstsctioComponent;
  let fixture: ComponentFixture<FirstsctioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstsctioComponent]
    });
    fixture = TestBed.createComponent(FirstsctioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
