import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardSecurityComponent } from "./components/card-security/card-security.component";
import { CardsInitComponent } from "./components/cards-init/cards-init.component";
import { BannerNovidadesComponent } from "./components/banner-novidades/banner-novidades.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CardSecurityComponent, CarouselComponent, BannerNovidadesComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-decola-bank';
}
