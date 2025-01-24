import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerNovidadesComponent } from "./components/banner-novidades/banner-novidades.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BannerNovidadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-decola-bank';
}
