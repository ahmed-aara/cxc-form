import { Component, ElementRef, OnInit, Renderer2, RendererStyleFlags2, ViewChild } from '@angular/core';
declare const makeid: any
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

  @ViewChild('paymentIframe') iframe: ElementRef | undefined

  //Array
  cardArr: any = [
    { type: 'rating', id: makeid(11) },
    { type: 'text', id: makeid(11) },
    { type: 'choice', id: makeid(11) },
    { type: 'date', id: makeid(11) },
  ]

  //Variable
  add_btn_option: any = false

  constructor(private renderer: Renderer2) { }

  @ViewChild('sec_form', { static: false }) sec_form: any;

  ngOnInit(): void { }

  receivedAction(data: any) {
    if (data.type === 'delete') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.value);
      this.cardArr.splice(index, 1)
    }
  }

  add(type: any) {
    console.log(this.cardArr)
    this.cardArr.push({ type: type, id: makeid(11) })
  }

  btnOption() {
    this.add_btn_option = !this.add_btn_option
    if (this.add_btn_option) {

      this.myDOM('.btn_add',
        [
          { key: 'width', value: '70%' },
        ]
      )

      this.myDOM('.btn_add .body_',
        [
          { key: 'display', value: 'none' },
        ]
      )

      this.myDOM('.btn_add .buttons_',
        [
          { key: 'display', value: 'block' },
        ]
      )

    } else if (!this.add_btn_option) {
      this.myDOM('.btn_add',
        [
          { key: 'width', value: '12%' },
        ]
      )

      this.myDOM('.btn_add .body_',
        [
          { key: 'display', value: 'flex' },
        ]
      )

      this.myDOM('.btn_add .buttons_',
        [
          { key: 'display', value: 'none' },
        ]
      )
    }
  }

  myDOM(_class: any, styleData: any) {
    styleData.map((value: any) => { return this.renderer.setStyle(this.sec_form.nativeElement.querySelector(_class), value.key, value.value, RendererStyleFlags2.Important); })
  }



}
