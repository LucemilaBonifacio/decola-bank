import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-decola-bank';
}
