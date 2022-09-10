import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! with array {{data[0]}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
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
