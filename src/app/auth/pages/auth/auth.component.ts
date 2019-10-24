import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  public itemForm: FormGroup;
  constructor(private fromBuilder: FormBuilder, private authS:AuthService) { }

  ngOnInit() {
    this.itemForm = this.fromBuilder.group({
      login: ['', Validators.required ],
      pass: ['', Validators.required ]
    });
  }

  login():void{
    this.authS.login(this.itemForm.value)
  }
}
