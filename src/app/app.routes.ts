import { Routes } from '@angular/router';
import {LoginPage} from '../pages/login-page/login-page';
import {NotFound} from '../pages/not-found/not-found';
import {RegisterPage} from '../pages/register-page/register-page';
import {HomePage} from '../pages/homepage/home-page.component';

export const routes: Routes = [
  {
    path: '', title: 'Cracken CRM', component: HomePage
  },
  {
    path: 'login', title: 'Cracken CRM - Login', component: LoginPage
  },
  {
    path: 'register', title: 'Cracken CRM - Register', component: RegisterPage
  },
  {
    path: '**', title: 'Not Found', component: NotFound
  }
];
