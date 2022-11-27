import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss',
    '../../mine/margin_padding.scss',
    '../../mine/color.scss',
    '../../mine/general.scss',
    '../../mine/mine.scss',
    '../../mine/font.scss']
})
export class PreviewComponent implements OnInit {

  //Array

  cardArr: any = []

  ngOnInit(): void {
    let x: any = localStorage.getItem('card')
    this.cardArr = JSON.parse(x)
    console.log(this.cardArr)
  }

  receivedAction(data: any) {
  }



}
