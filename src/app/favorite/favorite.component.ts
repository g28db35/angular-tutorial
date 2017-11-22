
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() isClicked = false;

  @Output() changeState = new EventEmitter<boolean>();

  onClick() {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
    this.changeState.emit(this.isClicked);
  }



  constructor() { }

  ngOnInit() {
  }

}
