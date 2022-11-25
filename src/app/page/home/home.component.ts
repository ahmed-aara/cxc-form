import { Component, OnInit, Renderer2, RendererStyleFlags2, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { choiceData, dateData, textData, ratingData, npsData } from '../../module/data';
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

    // {
    //   type: 'choice', id: makeid(11), data: choiceData(
    //     'choice',
    //     'Question',
    //     '',
    //     [],
    //     false,
    //     false,
    //     false,
    //     false,
    //     false
    //   )
    // },

    // { type: 'date', id: makeid(11), data: dateData('date', 'Question', '', false, false) },
    // {
    //   type: 'rating', id: makeid(11), data: ratingData(
    //     'rating',
    //     'Question',
    //     '',
    //     5,
    //     'number',
    //     '',
    //     '',
    //     false,
    //     false,
    //     false
    //   )
    // },

    // {
    //   type: 'nps', id: makeid(11), data: npsData(
    //     'nps',
    //     'Question',
    //     '',
    //     'Not at all likely',
    //     'Extremely likely',
    //     false,
    //     false
    //   )
    // },
  ]

  //Variable
  open_btn_option: any = true
  arr: any = []

  constructor(private renderer: Renderer2) { }

  @ViewChild('sec_form', { static: false }) sec_form: any;

  ngOnInit(): void {
    let x: any = localStorage.getItem('card')
    this.cardArr = JSON.parse(x)
    // console.log(JSON.parse(x))
  }

  receivedAction(data: any) {
    if (data.type === 'delete') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.value);
      this.cardArr.splice(index, 1)
    } else if (data.type === 'change-data') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.template_id);

      this.cardArr[index].data = data.value
      localStorage.setItem('card', JSON.stringify(this.cardArr))

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
        let x: any = localStorage.getItem('card')
        console.log(JSON.parse(x)[index].data)

        this.cardArr.push({
          type: data.value.type,
          id: makeid(11),
          data: choiceData(
            JSON.parse(x)[index].data.type,
            JSON.parse(x)[index].data.question_text,
            JSON.parse(x)[index].data.subtitle_text,
            JSON.parse(x)[index].data.options,
            JSON.parse(x)[index].data.other_option,
            JSON.parse(x)[index].data.drop_down,
            JSON.parse(x)[index].data.multiple_answers,
            JSON.parse(x)[index].data.subtitle,
            JSON.parse(x)[index].data.required
          )
        })

        this.cardArr[index + 1].data.options = data.value.options
        this.cardArr[index + 1].data.options = this.cardArr[index + 1].data.options


      } else if (data.value.type === 'date') {
        this.cardArr.push({
          type: data.value.type,
          id: makeid(11),
          data: dateData(
            data.value.type,
            data.value.question_text,
            data.value.subtitle_text,
            data.value.subtitle,
            data.value.required,
          )
        })
      } else if (data.value.type === 'rating') {
        this.cardArr.push({
          type: data.value.type,
          id: makeid(11),
          data: ratingData(
            data.value.type,
            data.value.question_text,
            data.value.subtitle_text,
            data.value.level,
            data.value.symbol,
            data.value.label_start,
            data.value.label_end,
            data.value.label,
            data.value.subtitle,
            data.value.required
          )
        })
      } else if (data.value.type === 'nps') {
        this.cardArr.push({
          type: data.value.type,
          id: makeid(11),
          data: npsData(
            data.value.type,
            data.value.question_text,
            data.value.subtitle_text,
            data.value.bad_text,
            data.value.good_text,
            data.value.subtitle,
            data.value.required
          )
        })
      }

    } else if (data.type === 'add-option') {
      // var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.template_id);

      // if (this.cardArr[index].data.options.length === length) {
      //   this.cardArr[index].data.options.push({ name: 'Option' })
      // } else {

      //   this.arr.push({ name: 'Option' })
      //   console.log(this.arr)
      //   this.cardArr[index].data.options = this.arr
      // }


    }
  }

  add(type: any) {
    this.open_btn_option = false;
    this.btnOption()
    if (type === 'text') {
      this.cardArr.push({ type: type, id: makeid(11), data: textData('text', false, false, false, 'Question', '') })
    } else if (type === 'choice') {
      this.cardArr.push({ type: 'choice', id: makeid(11), data: choiceData('choice', 'Question', '', [], false, false, false, false, false) })
    } else if (type === 'date') {
      this.cardArr.push({ type: 'date', id: makeid(11), data: dateData('date', 'Question', '', false, false) })
    } else if (type === 'rating') {
      this.cardArr.push({ type: 'rating', id: makeid(11), data: ratingData('rating', 'Question', '', 5, 'star', '', '', false, false, false) })
    } else if (type === 'nps') {
      this.cardArr.push({ type: 'nps', id: makeid(11), data: npsData('nps', 'Question', '', 'Not at all likely', 'Extremely likely', false, false) })
    }

    setTimeout(() => {
      UIkit.scroll().scrollTo('.end_');
    }, 100);
  }

  btnOption() {
    // this.add_btn_option = !this.add_btn_option
    if (this.open_btn_option) {

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

    } else if (!this.open_btn_option) {
      this.myDOM('.btn_add',
        [
          { key: 'width', value: '15%' },
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

  final() {
    console.log(this.cardArr)
  }


}
