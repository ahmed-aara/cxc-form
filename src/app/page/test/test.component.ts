import { Component, VERSION, ElementRef, ViewChild, OnInit } from '@angular/core';

declare const UIkit: any, sortable: any

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  arr: any = [
    { title: 'one', index: 1 },
    { title: 'two', index: 2 },
    { title: 'three', index: 3 },
    { title: 'four', index: 4 },
    { title: 'five', index: 5 },
    { title: 'six', index: 6 },
    { title: 'seven', index: 7 },
    { title: 'eight', index: 8 }]
  qasd: any
  ngOnInit(): void {

    UIkit.util.on('.sortable_', 'moved', (item: any, sortable: any) => {

      const new_order = item.detail[0].items.map((el: any) => el.id);

      console.log('origin index', sortable.origin.index)
      console.log('move index', new_order.indexOf(item.detail[1].id))

      const element = this.arr.splice(sortable.origin.index, 1)[0];
      console.log(element);

      this.arr.splice(new_order.indexOf(item.detail[1].id), 0, element);
      this.tt()
    });

  }

  tt() {
    for(let x = 0; x < this.arr.length; x++) this.arr[x].index = x+1
    console.log(this.arr)
  }





}

