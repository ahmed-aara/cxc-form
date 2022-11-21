import { Component, OnInit } from '@angular/core';

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

  //Variable
  option: any = {
    long_text: false,
    subtitle: false,
    required: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
