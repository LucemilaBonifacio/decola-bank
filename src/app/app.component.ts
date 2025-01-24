import { CarouselComponent } from "./components/carousel/carousel.component";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardSecurityComponent } from "./components/card-security/card-security.component";
import { CardsInitComponent } from "./components/cards-init/cards-init.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CardSecurityComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-decola-bank';
}
