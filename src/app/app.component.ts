import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-decola-bank';
}
