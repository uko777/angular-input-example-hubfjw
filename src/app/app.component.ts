import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  myArray = [{value: 'aa', name: 'aaa'}, {value: 'bb', name:'bbb'}];
  data = ['Helloah1','Halloah2'];
}
