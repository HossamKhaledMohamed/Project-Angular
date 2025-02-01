import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }
  @Input()parentInfo='';
  @Output()Task=new EventEmitter<string>();
  @Output()sendOut=new EventEmitter<string>();

  sendTask(){
    this.Task.emit('Aya My love');
  }

  sendOutf(){
    this.sendOut.emit('SEnd Task');
  }

    ngOnInit(): void {
  }

}
