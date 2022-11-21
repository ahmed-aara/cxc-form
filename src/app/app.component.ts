import { Component, ElementRef, OnInit, Renderer2, RendererStyleFlags2, ViewChild } from '@angular/core';
import { DataPassService } from './service/data-pass.service';

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





  //Variable
  add_btn_option: any = false
  enable: any = true
  other: any = false

  /*******************test */
  child1Data: any;
  child2Data: any;
  constructor(private renderer: Renderer2, private dataPass: DataPassService) {
    this.dataPass.child2Subject.subscribe((data: any) => {
      this.child2Data = data;
    })
    this.dataPass.child1Subject.subscribe((data: any) => {
      this.child1Data = data;
    })
  }

  saveValues() {
    console.log(this.child1Data);
    console.log(this.child2Data);
  }

  /*******************test */

  @ViewChild('sec_form', { static: false }) sec_form: any;

  ngOnInit(): void {
    console.log(this.child1Data);
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

  active(event: any) {
    console.log(event.target)
    console.log(typeof event.path[1])
    this.renderer.addClass(event.path[1], "active_update")
  }

  close() {
    console.log('ajdshgasd')
  }

  myDOM(_class: any, styleData: any) {
    styleData.map((value: any) => { return this.renderer.setStyle(this.sec_form.nativeElement.querySelector(_class), value.key, value.value, RendererStyleFlags2.Important); })
  }

}
