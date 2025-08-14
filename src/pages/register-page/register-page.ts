import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage {

  isPasswordVisible = false;
  isRepeatPasswordVisible = false;

  showOrHidePassword(input: HTMLInputElement) {
    if (input.type === 'password') {
      input.type = 'text';
      if (input.id === 'password') {
        this.isPasswordVisible = true;
      } else {
        this.isRepeatPasswordVisible = true;
      }
    } else {
      input.type = 'password';
      if (input.id === 'password') {
        this.isPasswordVisible = false;
      } else {
        this.isRepeatPasswordVisible = false;
      }
    }
  }
}
