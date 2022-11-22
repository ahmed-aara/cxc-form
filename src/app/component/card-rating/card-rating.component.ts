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
  @Input() id: string | undefined;

  //Array
  levelArr: any = [2, 3, 4, 5, 6, 7, 8, 9, 10]
  SymbolArr: any = [
    { icon: '', value: 'Number' },
    { icon: '', value: 'Star' },
    { icon: '', value: 'Thumb Like' },
    { icon: '', value: 'Smile Face' },
    { icon: '', value: 'Heart' },
    { icon: '', value: 'Checkmark' },
    { icon: '', value: 'Trophy' },
    { icon: '', value: 'Lightbulb' },
    { icon: '', value: 'Ribbon' }
  ]
  rateArr: any = []


  //Variable
  level: any
  option: any = {
    long_text: false,
    subtitle: false,
    required: false
  }

  constructor() { }

  ngOnInit(): void {

  }

  change() {

    for (let x = 0; x < this.level; x++) { this.rateArr.push(x) }
    console.log(this.rateArr)

  }

  delete(id: any) {
    this.clickEvent.emit({ type: 'delete', value: id });
  }

  copy(data: any) {
    this.clickEvent.emit({ type: 'copy', value: 'id' });
  }

}
