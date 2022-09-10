import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! test {{data[0]}} and {{array[0].name}}</h1>`,
  styles: ['./hello.component.css']
})
export class HelloComponent implements OnInit  {
  public array;
  @Input() name: string;
  @Input() data: string[];
  @Input()
  set myArray(value) {
    if(value) {
      this.array = value;
    }
  }

  ngOnInit() {
    console.log('array is', this.array);
  }
}
