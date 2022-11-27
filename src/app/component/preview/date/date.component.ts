import { Component, Input } from '@angular/core';

@Component({
  selector: 'preview-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss',
    '../../../mine/margin_padding.scss',
    '../../../mine/color.scss',
    '../../../mine/general.scss',
    '../../../mine/mine.scss',
    '../../../mine/font.scss']
})
export class DateComponent {

  @Input() item: any | undefined;
  @Input() arrange: any | undefined;

}
