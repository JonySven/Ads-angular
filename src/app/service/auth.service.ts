import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get token(): string {
    return ''
  }

  constructor(private _http: HttpClient) { }

  login(user: IUser): Observable<any> {
    return this._http.post('', user)
  }
  logOut() {

  }
  isAutheicated(): boolean {
    return !!this.token
  }

  private _setToken() {

  }
}
