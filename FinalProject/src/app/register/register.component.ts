import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    frist_name: new FormControl(null, [Validators.required , Validators.minLength(3)] ),
    last_name: new FormControl(null, [Validators.required , Validators.maxLength(3)]),
    email: new FormControl(null, [Validators.required ,Validators.email,Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required , Validators.pattern('^[A-Z][a-zA-Z-0-9')]),
    age: new FormControl(null, [Validators.required]),
  })
  constructor(){}
  ngOnInit(): void {
  throw new Error('Method not implemented.');
  }

}
