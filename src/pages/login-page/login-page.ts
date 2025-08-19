import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Auth} from '@apis';
import {AccessToken} from '@interfaces';
import {Router} from '@angular/router';
import {FooterComponent} from '../footer-component/footer-component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [
    NgOptimizedImage,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  isPasswordVisible = false;

  showOrHidePassword(input: HTMLInputElement) {
    if (input.type === 'password') {
      input.type = 'text';
      this.isPasswordVisible = true;
    } else {
      input.type = 'password';
      this.isPasswordVisible = false;
    }
  }

  constructor(private readonly authService: Auth, private readonly router: Router) {}

  // constructor(private readonly authService: Auth) {}

  username: string | null = null;
  password: string | null = null;

  login(){
    if(!this.username || ! this.password){
      //TODO Handle toast message
      return;
    }


    this.authService.login(this.username, this.password)
      .subscribe({
        next: (res: AccessToken) => {
          sessionStorage.setItem('token', res.token);
          //TODO handle redirect to internal app
        }
      })
  }

  // constructor(private readonly router: Router) {}

  navigateToRegisterPage(): void {
    this.router.navigate(['register']);
  }

}
