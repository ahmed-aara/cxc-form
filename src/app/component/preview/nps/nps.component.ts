import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'preview-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss',
    '../../../mine/margin_padding.scss',
    '../../../mine/color.scss',
    '../../../mine/general.scss',
    '../../../mine/mine.scss',
    '../../../mine/font.scss']
})
export class NpsComponent {

  value:any

  @Output() clickEvent = new EventEmitter();
  @Input() item: any | undefined;
  @Input() arrange: any | undefined;

  test(item: any) {
    this.value = item
  }

}
