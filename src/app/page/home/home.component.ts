import { Component, OnInit, Renderer2, RendererStyleFlags2, ViewChild } from '@angular/core';
import { choiceData, textData } from '../../module/data';
declare const makeid: any, UIkit: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss',
    '../../mine/margin_padding.scss',
    '../../mine/color.scss',
    '../../mine/general.scss',
    '../../mine/mine.scss',
    '../../mine/font.scss'
  ]
})
export class HomeComponent implements OnInit {

  //Array
  cardArr: any = [
    // { type: 'text', id: makeid(11), data: textData('text', false, false, false, 'Question', '') },
    // { type: 'rating', id: makeid(11) },
    {
      type: 'choice', id: makeid(11), data: choiceData(
        'choice',
        'Question',
        '',
        [],
        false,
        false,
        false,
        false,
        false
      )
    },
    // { type: 'date', id: makeid(11) },
  ]

  //Variable
  add_btn_option: any = false
  arr: any = []

  constructor(private renderer: Renderer2) { }

  @ViewChild('sec_form', { static: false }) sec_form: any;

  ngOnInit(): void {
  }

  receivedAction(data: any) {
    if (data.type === 'delete') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.value);
      this.cardArr.splice(index, 1)
    } else if (data.type === 'change-data') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.template_id);

      this.cardArr[index].data = data.value

    } else if (data.type === 'copy') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.template_id);

      if (data.value.type === 'text') {
        this.cardArr.push({
          type: data.value.type,
          id: makeid(11),
          data: textData(
            data.value.type,
            data.value.long_text,
            data.value.subtitle,
            data.value.required,
            data.value.question_text,
            data.value.subtitle_text
          )
        })
      } else if (data.value.type === 'choice') {

        console.log(data.value.options)
        let x: any[] = []
        for (let xx of this.cardArr[index].data.options) {
          x.push(xx)
        }

        this.cardArr.push({
          type: data.value.type,
          id: makeid(11),
          data: choiceData(
            data.value.type,
            data.value.question_text,
            data.value.subtitle_text,
            x,
            data.value.other_option,
            data.value.drop_down,
            data.value.multiple_answers,
            data.value.subtitle,
            data.value.required
          )
        })
      }

    } else if (data.type === 'test') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.template_id);

      this.arr.push({ name: 'Option' })
      console.log(this.arr)
      this.cardArr[index].data.options = this.arr
    }
  }

  test() {
    console.log(this.cardArr)
  }

  add(type: any) {

    if (type === 'text') {
      this.cardArr.push({ type: type, id: makeid(11), data: textData('text', false, false, false, 'Question', '') })
    } else if (type === 'choice') {
      this.cardArr.push({ type: 'choice', id: makeid(11), data: choiceData('choice', 'Question', '', [], false, false, false, false, false) })
    }

    setTimeout(() => {
      UIkit.scroll().scrollTo('.end_');
    }, 100);
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
