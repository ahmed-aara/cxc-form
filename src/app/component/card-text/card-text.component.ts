import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss',
    '../../mine/margin_padding.scss',
    '../../mine/color.scss',
    '../../mine/general.scss',
    '../../mine/mine.scss',
    '../../mine/font.scss']
})
export class CardTextComponent implements OnInit {

  @Output() clickEvent = new EventEmitter();
  @Input() id: string | undefined;

  //Variable
  option: any = {
    long_text: false,
    subtitle: false,
    required: false,
    question_text: 'Question',
    subtitle_text: 'Question',
  }

  constructor() { }

  ngOnInit() {
  }

  delete(id: any) {
    this.clickEvent.emit({ type: 'delete', value: id });
  }

  copy(data: any) {
    this.clickEvent.emit({ type: 'copy', value: 'id' });
  }

  changeValue() {
    this.clickEvent.emit({ type: 'change-data', value: this.option });
  }

}
