import { Injectable } from '@angular/core';
import { Test } from './test';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {


  }

  arryForObject:Array<Test>=[
    {name:'hossam',age:11,salary:1000},
    {name:'Ahmed',age:22,salary:2000},
    {name:'aya',age:34,salary:3000}]
}
