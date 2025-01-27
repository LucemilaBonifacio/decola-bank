import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CardAppHomeComponent } from "../card-app-home/card-app-home.component";
import { CardSecurityComponent } from "../card-security/card-security.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { CardsInitComponent } from "../cards-init/cards-init.component";
import { BannerNovidadesComponent } from "../banner-novidades/banner-novidades.component";


@Component({
  selector: 'app-home',
  imports: [FooterComponent, CarouselComponent, CardsInitComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
