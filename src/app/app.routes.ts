import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginClienteComponent } from './components/cliente/login-cliente/login-cliente.component';
import { FormAbrirContaComponent } from './components/form-abrir-conta/form-abrir-conta.component';
import { TelaInicialClienteComponent } from './components/cliente/tela-inicial-cliente/tela-inicial-cliente.component';
import { LoginGerenteComponent } from './components/gerente/login-gerente/login-gerente.component';

import { SaqueComponent } from './components/cliente/tela-inicial-cliente/saque/saque.component';
import { PagamentoComponent } from './components/cliente/tela-inicial-cliente/pagamento/pagamento.component';

import { DepositoComponent } from './components/cliente/tela-inicial-cliente/deposito/deposito.component';
import { PixComponent } from './components/cliente/tela-inicial-cliente/pix/pix.component';





export const routes: Routes = [
{path:"", redirectTo:"home", pathMatch:"full"},
{path: 'home', component: HomeComponent},
{path: 'abra-sua-conta', component: FormAbrirContaComponent},
{path: 'login/cliente', component: LoginClienteComponent},
{path: 'tela-inicial-cliente', component: TelaInicialClienteComponent},
{path: 'login/gerente', component: LoginGerenteComponent},
{path: 'SaqueComponent', component: SaqueComponent},
{path: 'deposito',component: DepositoComponent},
{path: 'pagamento',component: PagamentoComponent},
{path: 'pix',component: PixComponent }









];
