import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGerenteComponent } from './login-gerente.component';

describe('LoginGerenteComponent', () => {
  let component: LoginGerenteComponent;
  let fixture: ComponentFixture<LoginGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginGerenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
