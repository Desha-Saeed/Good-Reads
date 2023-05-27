import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSectionComponent } from './s-section.component';

describe('SSectionComponent', () => {
  let component: SSectionComponent;
  let fixture: ComponentFixture<SSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SSectionComponent]
    });
    fixture = TestBed.createComponent(SSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
