import { Routes } from '@angular/router';
import {LoginPage} from '../pages/login-page/login-page';
import {NotFound} from '../pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '', title: 'Cracken CRM - Login', component: LoginPage
  },
  {
    path: '**', title: 'Not Found', component: NotFound
  }
];
