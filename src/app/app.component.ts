import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsInitComponent } from "./components/cards-init/cards-init.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardsInitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-decola-bank';
}
