import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNovidadesComponent } from './banner-novidades.component';

describe('BannerNovidadesComponent', () => {
  let component: BannerNovidadesComponent;
  let fixture: ComponentFixture<BannerNovidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerNovidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerNovidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
