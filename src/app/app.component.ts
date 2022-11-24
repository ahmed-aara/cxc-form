import { Component, ElementRef, OnInit, Renderer2, RendererStyleFlags2, ViewChild } from '@angular/core';
import { textData } from './module/data';
declare const makeid: any, UIkit: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './mine/margin_padding.scss',
    './mine/color.scss',
    './mine/general.scss',
    './mine/mine.scss',
    './mine/font.scss'
  ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
