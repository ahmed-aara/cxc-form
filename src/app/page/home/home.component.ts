import { Component, OnInit, Renderer2, RendererStyleFlags2, ViewChild } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { DataPassService } from 'src/app/service/data-pass.service';
import { environment } from 'src/environments/environment.prod';
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

  close: any = false;

  constructor(private renderer: Renderer2, private ads: DataPassService) { }

  @ViewChild('sec_form', { static: false }) sec_form: any;

  ngOnInit(): void {

    this.ads.test().subscribe(
      response => {
        console.log(response)
      }
    )

    let x: any = localStorage.getItem('card')
    this.cardArr = JSON.parse(x)

    UIkit.util.on('.sortable_', 'moved', (item: any, sortable: any) => {

      console.log(item.detail)

      const new_order = item.detail[0].items.map((el: any) => el.id);

      console.log('origin index', sortable.origin.index)
      console.log('move index', new_order.indexOf(item.detail[1].id))


      const element = this.cardArr.splice(sortable.origin.index, 1)[0];
      console.log(element);

      this.cardArr.splice(new_order.indexOf(item.detail[1].id), 0, element);

      localStorage.setItem('card', JSON.stringify(this.cardArr))

    });

    UIkit.util.on('.sortable_', 'stop', (item: any, sortable: any) => {
      this.close = false
    });

  }

  receivedAction(data: any) {
    if (data.type === 'delete') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.value);
      this.cardArr.splice(index, 1)

      let x: any = localStorage.getItem('card')
      let u = JSON.parse(x)
      u.splice(index, 1)

      localStorage.setItem('card', JSON.stringify(u))

    } else if (data.type === 'change-data') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.template_id);

      let x: any = localStorage.getItem('card')
      let u = JSON.parse(x)
      u[index].data = data.value

      localStorage.setItem('card', JSON.stringify(u))

    } else if (data.type === 'copy') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.template_id);

      if (data.value.type === 'text') {

        let x: any = localStorage.getItem('card')
        this.addLocalStorage({
          type: data.value.type,
          id: makeid(11),
          data: textData(
            JSON.parse(x)[index].data.type,
            JSON.parse(x)[index].data.long_text,
            JSON.parse(x)[index].data.subtitle,
            JSON.parse(x)[index].data.required,
            JSON.parse(x)[index].data.question_text,
            JSON.parse(x)[index].data.subtitle_text
          )
        })

      } else if (data.value.type === 'choice') {
        let x: any = localStorage.getItem('card')

        this.addLocalStorage({
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

      } else if (data.value.type === 'date') {

        let x: any = localStorage.getItem('card')

        this.addLocalStorage({
          type: data.value.type,
          id: makeid(11),
          data: dateData(
            JSON.parse(x)[index].data.type,
            JSON.parse(x)[index].data.question_text,
            JSON.parse(x)[index].data.subtitle_text,
            JSON.parse(x)[index].data.subtitle,
            JSON.parse(x)[index].data.required,
          )
        })


      } else if (data.value.type === 'rating') {

        let x: any = localStorage.getItem('card')

        this.addLocalStorage({
          type: data.value.type,
          id: makeid(11),
          data: ratingData(
            JSON.parse(x)[index].data.type,
            JSON.parse(x)[index].data.question_text,
            JSON.parse(x)[index].data.subtitle_text,
            JSON.parse(x)[index].data.level,
            JSON.parse(x)[index].data.symbol,
            JSON.parse(x)[index].data.label_start,
            JSON.parse(x)[index].data.label_end,
            JSON.parse(x)[index].data.label,
            JSON.parse(x)[index].data.subtitle,
            JSON.parse(x)[index].data.required
          )
        })

      } else if (data.value.type === 'nps') {

        let x: any = localStorage.getItem('card')

        this.addLocalStorage({
          type: data.value.type,
          id: makeid(11),
          data: npsData(
            JSON.parse(x)[index].data.type,
            JSON.parse(x)[index].data.question_text,
            JSON.parse(x)[index].data.subtitle_text,
            JSON.parse(x)[index].data.bad_text,
            JSON.parse(x)[index].data.good_text,
            JSON.parse(x)[index].data.subtitle,
            JSON.parse(x)[index].data.required
          )
        })

      }

    } else if (data.type === 'add-option') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.template_id);
      let x: any = localStorage.getItem('card')
      let u = JSON.parse(x)
      u[index].data.options.push({ name: 'Option' })
      localStorage.setItem('card', JSON.stringify(u))
      let newArr: any = localStorage.getItem('card')
      this.cardArr = JSON.parse(newArr)
    } else if (data.type === 'delete-option') {
      var index = this.cardArr.map((o: any) => { return o.id; }).indexOf(data.template_id);
      let x: any = localStorage.getItem('card')
      let u = JSON.parse(x)
      u[index].data.options.splice(data.index, 1)
      localStorage.setItem('card', JSON.stringify(u))
      let newArr: any = localStorage.getItem('card')
      this.cardArr = JSON.parse(newArr)
    } else if (data.type === 'mouse-over') this.close = true

  }

  add(type: any) {
    this.open_btn_option = false;
    this.btnOption()

    if (type === 'text')
      this.addLocalStorage({ type: type, id: makeid(11), data: textData('text', false, false, false, 'Question', '') })
    else if (type === 'choice')
      this.addLocalStorage({ type: 'choice', id: makeid(11), data: choiceData('choice', 'Question', '', [], false, false, false, false, false) })
    else if (type === 'date')
      this.addLocalStorage({ type: 'date', id: makeid(11), data: dateData('date', 'Question', '', false, false) })
    else if (type === 'rating')
      this.addLocalStorage({ type: 'rating', id: makeid(11), data: ratingData('rating', 'Question', '', 5, 'star', '', '', false, false, false) })
    else if (type === 'nps')
      this.addLocalStorage({ type: 'nps', id: makeid(11), data: npsData('nps', 'Question', '', 'Not at all likely', 'Extremely likely', false, false) })

    setTimeout(() => {
      UIkit.scroll().scrollTo('.end_');
    }, 100);
  }

  btnOption() {
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
    // console.log(this.cardArr)
  }

  addLocalStorage(object: any) {
    let localData: any = localStorage.getItem('card')
    let localArr = JSON.parse(localData)

    localArr.push(object)

    localStorage.setItem('card', JSON.stringify(localArr))
    let newArr: any = localStorage.getItem('card')
    this.cardArr = JSON.parse(newArr)
  }


}
