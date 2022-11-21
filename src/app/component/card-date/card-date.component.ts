import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-date',
  templateUrl: './card-date.component.html',
  styleUrls: ['./card-date.component.scss',
    '../../mine/margin_padding.scss',
    '../../mine/color.scss',
    '../../mine/general.scss',
    '../../mine/mine.scss',
    '../../mine/font.scss']
})
export class CardDateComponent implements OnInit {


  option: any = {
    multiple_answers: false,
    subtitle: false,
    drop_down: false,
    required: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
