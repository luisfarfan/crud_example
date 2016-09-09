import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent implements AfterViewInit {
  constructor(private elementRef:ElementRef){}
  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src="assets/js/core/app.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
