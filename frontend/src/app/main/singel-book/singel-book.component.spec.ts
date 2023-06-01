import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingelBookComponent } from './singel-book.component';

describe('SingelBookComponent', () => {
  let component: SingelBookComponent;
  let fixture: ComponentFixture<SingelBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingelBookComponent]
    });
    fixture = TestBed.createComponent(SingelBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
