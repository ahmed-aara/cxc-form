import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-card-date',
  templateUrl: './card-date.component.html',
  styleUrls: ['./card-date.component.scss',
    '../../mine/margin_padding.scss',
    '../../mine/color.scss',
    '../../mine/general.scss',
    '../../mine/mine.scss',
    '../../mine/font.scss']
})
export class CardDateComponent implements OnInit {

  @Output() clickEvent = new EventEmitter();
  @Input() id: string | undefined;

  option: any = {
    multiple_answers: false,
    subtitle: false,
    drop_down: false,
    required: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  delete(id: any) {
    this.clickEvent.emit({ type: 'delete', value: id });
  }

  copy(data: any) {
    this.clickEvent.emit({ type: 'copy', value: 'id' });
  }


}
