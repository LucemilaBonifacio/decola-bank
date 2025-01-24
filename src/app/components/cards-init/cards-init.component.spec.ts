import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsInitComponent } from './cards-init.component';

describe('CardsInitComponent', () => {
  let component: CardsInitComponent;
  let fixture: ComponentFixture<CardsInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
