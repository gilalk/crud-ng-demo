import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _client : HttpClient) { }

  login(email:string, password: string){
    let httpOtions = {
      params: {
        email,
        password
      }
    }
    return this._client.get('http://localhost:3000/users', httpOtions);
  }

  public isAuthenticated() : boolean{
    const email = localStorage.getItem('EMAIL')
    return(email !== null)
  }
}
