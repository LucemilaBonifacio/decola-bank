import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginClienteComponent } from './components/cliente/login-cliente/login-cliente.component';
import { FormAbrirContaComponent } from './components/form-abrir-conta/form-abrir-conta.component';
import { GerenteComponent } from './components/gerente/gerente.component';
import { ClienteNovoComponent } from './components/gerente/cliente-novo/cliente-novo.component';
import { ClienteAlteracaoComponent } from './components/gerente/cliente-alteracao/cliente-alteracao.component';
import { ContaComponent } from './components/conta/conta.component';
import { ExtratoComponent } from './components/conta/extrato/extrato.component';
import { ContaEncerrarComponent } from './components/conta/conta-encerrar/conta-encerrar.component';



export const routes: Routes = [
{path:"", redirectTo:"home", pathMatch:"full"},
{path: 'home', component: HomeComponent},
{path: 'abrirconta', component: FormAbrirContaComponent},
{path: 'login/cliente', component: LoginClienteComponent},

{path: 'clientes', component: GerenteComponent}, // tabela crud na tela inicial após autenticação do gerente
{path: 'clientes/novo', component: ClienteNovoComponent}, // button acima da tabela CREATE
{path: 'clientes/alteracao/:id', component: ClienteAlteracaoComponent}, // ícone do lápis UPDATE
{path: 'clientes/extrato/:id', component: ExtratoComponent}, // ícone extrato para consultar o extrato relacionado ao cliente READ

{path: 'clientes/conta/:id', component: ContaComponent}, // icone da lupa para exibir detalhes da conta do respectivo cliente na tabela READ
{path: 'clientes/conta/:id/encerrar', component: ContaEncerrarComponent} // encerramento de conta visível apenas ao exibir detalhes da conta DELETE
];
