import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  public imagePath = 'assets/logo.png';
  public imageWidth = 200;

  constructor(private router: Router){}

  logOut():void{
    localStorage.removeItem('user');
    this.router.navigate(['/auth'])
  }
}
