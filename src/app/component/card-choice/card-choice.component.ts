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
  @Input() item: any | undefined;
  @Input() arrange: any | undefined;
  @Input() close: any | undefined;

  constructor() { }

  ngOnInit() {

  }

  delete(id: any) {
    this.clickEvent.emit({ type: 'delete', value: id });
  }

  copy(data: any, id: any) {
    this.clickEvent.emit({ type: 'copy', value: data, template_id: id });
  }

  changeValue(data: any, id: any) {
    this.clickEvent.emit({ type: 'change-data', value: data, template_id: id });
  }

  addOption(id: any) {
    this.clickEvent.emit({ type: 'add-option', template_id: id });
  }

  deleteArr(index: any, id: any) {
    this.clickEvent.emit({ type: 'delete-option', template_id: id, index: index });
  }

  mouseOver() {
    this.clickEvent.emit({ type: 'mouse-over' });
  }

  onKey(event: any, index: any) {
    const inputValue = event.target.value;
    this.item.data.options[index] = { name: inputValue }
    console.log(inputValue)
  }


}
