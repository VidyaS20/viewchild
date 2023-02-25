import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentname:any='Bhim';
  @ViewChild(ChildComponent) xyz!: ChildComponent;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.xyz.childname = this.parentname
  }

  onChildMethod(){
    this.xyz.onClickAlert()
  }

  onChildColor(color:any){
    // this.xyz.headerColor.nativeElement.style.backgroundColor = 'red'
    this.xyz.color = color;
    this.xyz.ngAfterViewInit();
  }
}
