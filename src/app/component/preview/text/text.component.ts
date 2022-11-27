import { Component, Input } from '@angular/core';

@Component({
  selector: 'preview-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss',
  '../../../mine/margin_padding.scss',
  '../../../mine/color.scss',
  '../../../mine/general.scss',
  '../../../mine/mine.scss',
  '../../../mine/font.scss']
})
export class TextComponent {

  @Input() item: any | undefined;
  @Input() arrange: any | undefined;


}
