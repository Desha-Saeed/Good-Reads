import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotNavbarComponent } from './bot-navbar.component';

describe('BotNavbarComponent', () => {
  let component: BotNavbarComponent;
  let fixture: ComponentFixture<BotNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotNavbarComponent]
    });
    fixture = TestBed.createComponent(BotNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
