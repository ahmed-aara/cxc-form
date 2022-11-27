import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'preview-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss',
    '../../../mine/margin_padding.scss',
    '../../../mine/color.scss',
    '../../../mine/general.scss',
    '../../../mine/mine.scss',
    '../../../mine/font.scss']
})
export class RatingComponent implements OnInit {

  @Input() item: any | undefined;
  @Input() arrange: any | undefined;

  title = "star-angular";
  stars: any = [];
  rating: any = 0;
  hoverState = 0;

  ngOnInit(): void {
    for (let x = 0; x < this.item.data.level; x++) this.stars.push(x+1)
  }

  enter(i: any) {
    this.hoverState = i;
  }

  leave(event: any) {
    this.hoverState = 0;
  }

  updateRating(i: any) {
    console.log(i)
    this.rating = i;
  }

}
