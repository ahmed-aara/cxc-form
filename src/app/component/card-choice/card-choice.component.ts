import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-card-choice',
  templateUrl: './card-choice.component.html',
  styleUrls: ['./card-choice.component.scss',
    '../../mine/margin_padding.scss',
    '../../mine/color.scss',
    '../../mine/general.scss',
    '../../mine/mine.scss',
    '../../mine/font.scss']
})
export class CardChoiceComponent implements OnInit {

  @Output() clickEvent = new EventEmitter();
  @Input() id: string | undefined;

  option: any = {
    multiple_answers: false,
    subtitle: false,
    drop_down: false,
    required: false
  }

  //Array
  optionArr: any = []

  //Variable
  add_btn_option: any = false
  enable: any = true
  other: any = false

  constructor() { }

  ngOnInit() {

  }

  addOption() {
    this.optionArr.push({ name: '' })
  }

  delete(id: any) {
    this.clickEvent.emit({ type: 'delete', value: id });
  }

  copy(data: any) {
    this.clickEvent.emit({ type: 'copy', value: 'id' });
  }


}
