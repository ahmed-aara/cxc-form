import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-rating',
  templateUrl: './card-rating.component.html',
  styleUrls: ['./card-rating.component.scss',
    '../../mine/margin_padding.scss',
    '../../mine/color.scss',
    '../../mine/general.scss',
    '../../mine/mine.scss',
    '../../mine/font.scss']
})
export class CardRatingComponent implements OnInit {

  @Output() clickEvent = new EventEmitter();
  @Input() item: any | undefined;
  @Input() arrange: any | undefined;
  @Input() close: any | undefined;

  //Array
  levelArr: any = [2, 3, 4, 5, 6, 7, 8, 9, 10]
  SymbolArr: any = [
    { icon: 'assets/img/test/num-icon.svg', value: 'number' },
    { icon: 'assets/img/test/star-icon.svg', value: 'star' },
    { icon: 'assets/img/test/like-icon.svg', value: 'thumb like' },
    { icon: 'assets/img/test/smile-face-icon.svg', value: 'smile face' },
    { icon: 'assets/img/test/heart-icon.svg', value: 'heart' },
    { icon: 'assets/img/test/checkmark-icon.svg', value: 'checkmark' },
    { icon: 'assets/img/test/trophy-icon.svg', value: 'trophy' },
    { icon: 'assets/img/test/flag-icon.svg', value: 'flag' },
    { icon: 'assets/img/test/lightbulb-icon.svg', value: 'lightbulb' },
    { icon: 'assets/img/test/ribbon-icon.svg', value: 'ribbon' }
  ]
  rateArr: any = []

  constructor() { }

  ngOnInit(): void {
    for (let x = 0; x < this.item.data.level; x++) { this.rateArr.push(x) }
  }

  change() {
    this.rateArr = []
    for (let x = 0; x < this.item.data.level; x++) { this.rateArr.push(x) }
  }

  delete(id: any) {
    this.clickEvent.emit({ type: 'delete', value: id });
  }

  copy(data: any, id: any) {
    this.clickEvent.emit({ type: 'copy', value: data, template_id: id });
  }

  changeValue(data: any, id: any) {
    this.clickEvent.emit({ type: 'change-data', value: data, template_id: id });
  }

  mouseOver() {
    this.clickEvent.emit({ type: 'mouse-over' });
  }

}
