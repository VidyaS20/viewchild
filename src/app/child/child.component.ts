import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {
  childname = 'vidya';
  color = 'green';

  @ViewChild('headerColor') headerColor!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onClickAlert(){
    alert(this.childname)
  }

ngAfterViewInit(): void {
console.log("====>",this.headerColor)
this.headerColor.nativeElement.style.backgroundColor = this.color;
}
}
