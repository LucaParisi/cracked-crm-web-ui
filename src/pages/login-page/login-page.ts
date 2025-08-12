import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Auth} from '@apis';
import {AccessToken} from '@interfaces';

@Component({
  selector: 'app-login-page',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  // constructor(private readonly authService: Auth) {}
  //
  // username: string | null = null;
  // password: string | null = null;
  //
  // login(){
  //   if(!this.username || ! this.password){
  //     //TODO Handle toast message
  //     return;
  //   }
  //
  //
  //   this.authService.login(this.username, this.password)
  //     .subscribe({
  //       next: (res: AccessToken) => {
  //         sessionStorage.setItem('token', res.token);
  //         //TODO handle redirect to internal app
  //       }
  //     })
  // }

}
