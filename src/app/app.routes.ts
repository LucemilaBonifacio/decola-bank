import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginClienteComponent } from './components/cliente/login-cliente/login-cliente.component';




export const routes: Routes = [
{path:"", redirectTo:"home", pathMatch:"full"},
{path: 'home', component: HomeComponent},
{path: 'login/cliente', component: LoginClienteComponent}


];
