import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginClienteComponent } from './components/cliente/login-cliente/login-cliente.component';
import { FormAbrirContaComponent } from './components/form-abrir-conta/form-abrir-conta.component';
import { TelaInicialClienteComponent } from './components/cliente/tela-inicial-cliente/tela-inicial-cliente.component';




export const routes: Routes = [
{path:"", redirectTo:"home", pathMatch:"full"},
{path: 'home', component: HomeComponent},
{path: 'abra-sua-conta', component: FormAbrirContaComponent},
{path: 'login/cliente', component: LoginClienteComponent},
{path: 'tela-inicial-cliente', component: TelaInicialClienteComponent}



];
