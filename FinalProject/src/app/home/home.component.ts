import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { UserService } from '../user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   testService:any[]=[];
  constructor(_UserService:UserService) {
  this.testService=_UserService.arryForObject
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//stitec data tyep
  userName:string='Hossam2';
  age:Number=200;
  test:boolean=true;
  test2:null=null;
  x:undefined=undefined;
  frindes:object={name:'ahmed',age:20,salrey:3000}
  allfrindes:object[]=[{name:'hossam',age:22,sasd:'fdsfsf'},{ffdsf:'fsdfs'}];
  arryforstring:string[]=['aya','amr']

  imgSrc:string='https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/334206860_780156523012904_1792767278481384811_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHRpkM286HhV6ToTK0H-wGPFfwHERqc71MV_AcRGpzvU8Eb6_2FIwFQNefvYtt2MbX-aKcJFYsyy1uU6l-gQjj3&_nc_ohc=yclxzuv0AcoAX_xgqob&_nc_ht=scontent-hbe1-1.xx&oh=00_AfDIvx68ojaDMb2cxFiIc1PqKCk4Peq_Q2iGdO8lqlrgCA&oe=6411CC4B'
//--------------------------------------
//New Data Tyep

//tuple => opition more data type for one vribole

   choose:[string,number]=['hossam',2321];

   //Union

   choose2:string|number|boolean='string or number or boolean';

   //any  بنستخدمها اما لما بنكون مش عارفين الداتا الي راجعه عباره عن ايه
  //1- input
  //2- api
  //-----------------------------------------
  //interface ng g interface name
  // ده واجهه اوبجيكت بحدد في داتا الي جوه الاوبجيكت ومهم

  /* binding   =  ربط

  1- one way data {{}} = ده لو عايز احط فرابيل جوه html

  2- property binding [] ده لو عايز اربط بروبرتي

  3- event binding ( وبنكت هنا event)

  */


welcom(name:string){
  console.log(`hello ${name}`)
}


buttonInfo(eventInfo:any){

  console.log(eventInfo.target.value)
};
// __________________________

/*
تاني نوع من binding
4- binding for style
5- binding for class
و كمان اقدر اعمل اف كوندنشن فيهم  و ممكن احدد كذا حاجه  و ده معمول عشا لو جايلي استايل من اي بي اي او اي حاجه تانيه عايز اخليه دينامك
*/

colertest:string='red';

ifcondatan:boolean=false;
mainstyle:string='color:red;font-size:50px;background-color:blue;';
secondstyle:string='color:gray;font-size:100px;background-color:tomato;'

//________________________


name:string=''

// Users:object[]=[{lol:'Hossam',tot:23},{lol:'mohamed',tot:433},{name:'aya',age:556}]
/*
two way data binding

[(ngModule)]
-------------------------------
dirctives  change for style and dom(html)  = ng

1- ngClass [ngClass]="{'class':vribel,'calss':vribel}";
2- ngStyle [ngStyle]="{Color:'red', fontSize:'50px'}";

(strucural dirctives)    بيغيل في DOM
1- *ngIf  -   هنا لو عايز اظهر دف او اخفيها
2- *ngFor  - for loop  لو عايز اعمل لوب علي حاجه
3- ngSwitch - switch case لو لقيت حاجه ينفذ حاجه ملقهاش ينفذ حاجه تانيه
*/



//______________________

}


