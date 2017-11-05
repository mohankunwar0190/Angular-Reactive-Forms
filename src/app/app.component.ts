import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet name="primary"></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
