import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  @Input() allusers:Array<any>;
  @Output() sendUserValues=new EventEmitter<any>();
  @Output() setEmptyValues=new EventEmitter();
  @Output() sendDeletingIndex=new EventEmitter<number>();
  sendValues(user:any)
  {
    console.log("Inside Event emitter");
    this.sendUserValues.emit(user);
  }
  onCreateClick()
  {
    console.log("Inside created click event emitter");
    this.setEmptyValues.emit();
  }
  onDeletePressed(index:number)
  {
    this.sendDeletingIndex.emit(index);
  }
}
