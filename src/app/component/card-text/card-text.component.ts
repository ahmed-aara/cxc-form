import { Component, OnInit, Output, EventEmitter, Renderer2 } from '@angular/core';
import { DataPassService } from 'src/app/service/data-pass.service';

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

  //Variable
  option:any = {
    long_text:false,
    subtitle: false,
    required: false
  }

  child1Value: any = { firstName: "", lastName: "" }
  constructor(private dataPass: DataPassService, private renderer: Renderer2) { }

  ngOnInit() {

  }

  changeValues() {
    this.dataPass.child1DataChanges(this.child1Value);
  }

  active(event: any) {
    // console.log(event.target)
    // console.log(typeof event.path[1])
    // this.renderer.addClass(event.path[1], "active_update")
  }

}
