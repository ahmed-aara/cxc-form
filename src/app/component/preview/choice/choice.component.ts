import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'preview-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss',
    '../../../mine/margin_padding.scss',
    '../../../mine/color.scss',
    '../../../mine/general.scss',
    '../../../mine/mine.scss',
    '../../../mine/font.scss']
})
export class ChoiceComponent implements OnInit {

  @Input() item: any | undefined;
  @Input() arrange: any | undefined;

  ngOnInit(): void {
    if (this.item.data.other_option)
      this.item.data.options.push({ name: 'Other' })
  }

}
