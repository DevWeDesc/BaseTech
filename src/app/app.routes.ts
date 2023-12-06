import { Routes } from '@angular/router';
import { CreateAcountComponent } from './components/create-acount/create-acount.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create-account', component: CreateAcountComponent },
  { path: 'home', component: HomeComponent },
];
