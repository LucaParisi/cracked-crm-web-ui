import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthUrl} from './auth.url';
import {Observable} from 'rxjs';
import {AccessToken} from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string): Observable<AccessToken> {
    return this.http.post<AccessToken>(AuthUrl.LOGIN_URL, {username, password})
  }
}
