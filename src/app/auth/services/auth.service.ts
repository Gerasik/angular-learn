import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router){}

  public login(data:{login:string, pass:string}):void{
    if(data.pass){
      localStorage.setItem('user', data.login);
      this.router.navigate(['/board']);
    }
  };
}
