import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSecurityComponent } from './card-security.component';

describe('CardSecurityComponent', () => {
  let component: CardSecurityComponent;
  let fixture: ComponentFixture<CardSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSecurityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
