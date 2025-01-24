import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAppHomeComponent } from './card-app-home.component';

describe('CardAppHomeComponent', () => {
  let component: CardAppHomeComponent;
  let fixture: ComponentFixture<CardAppHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAppHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
