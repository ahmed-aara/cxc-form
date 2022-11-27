import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss',
    '../../../mine/margin_padding.scss',
    '../../../mine/color.scss',
    '../../../mine/general.scss',
    '../../../mine/mine.scss',
    '../../../mine/font.scss']
})
export class StarComponent implements OnInit {

  starClassName = "star-rating-blank";
  @Input() starId: any;
  @Input() rating: any;
  @Input() width: any;
  @Input() symbol: any;

  @Output() leave: EventEmitter<any> = new EventEmitter();
  @Output() enter: EventEmitter<any> = new EventEmitter();
  @Output() bigClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // console.log(this.starId);
    // console.log(this.rating);

    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }
  }

  onenter() {
    this.enter.emit(this.starId);
  }

  onleave() {
    this.leave.emit(this.starId);
  }

  starClicked() {
    this.bigClick.emit(this.starId);
  }

}
