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

  //
  arr: any = []


  constructor() { }

  ngOnInit() {

    for (let x of this.item.data.options) {
      this.arr.push(x)
    }

  }

  test(index: any) {



    this.item.data.options[index] = { name: 'ts' }
  }

  addOption() {
    // console.log(id)
    // this.item.data.options.push({ name: 'Option' })
    this.arr.push({ name: 'Option' })
  }

  delete(id: any) {
    this.clickEvent.emit({ type: 'delete', value: id });
  }

  copy(data: any, id: any) {
    this.clickEvent.emit({ type: 'copy', value: data, template_id: id, arr: this.arr });
  }

  changeValue(data: any, id: any) {
    this.clickEvent.emit({ type: 'change-data', value: data, template_id: id, arr: this.arr });
  }


  asdasd(id: any) {
    this.clickEvent.emit({ type: 'test', template_id: id });
  }

  deleteArr(index: any) {
    this.item.data.options.splice(index, 1)
  }

  onKey(event: any, index: any) {
    const inputValue = event.target.value;
    this.item.data.options[index] = { name: inputValue }
    console.log(inputValue)
  }

}
