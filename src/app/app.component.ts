import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardAppHomeComponent } from "./components/card-app-home/card-app-home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardAppHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-decola-bank';
}
