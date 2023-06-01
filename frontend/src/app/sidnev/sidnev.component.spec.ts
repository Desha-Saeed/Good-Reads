import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidnevComponent } from './sidnev.component';

describe('SidnevComponent', () => {
  let component: SidnevComponent;
  let fixture: ComponentFixture<SidnevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidnevComponent]
    });
    fixture = TestBed.createComponent(SidnevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
