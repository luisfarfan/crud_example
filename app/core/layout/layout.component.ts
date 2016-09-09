import {
    AfterViewInit,
    ElementRef,
    Component
} from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app/core/layout/layout.component.html'
})
export class LayoutComponent implements AfterViewInit {
    constructor(private elementRef: ElementRef) {}
    ngAfterViewInit() {
        var s = document.createElement("script");
        var mdb = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/core/app.js";

        mdb.type="text/javascript";
        mdb.src = "assets/js/core/mdb.js";

        this.elementRef.nativeElement.appendChild(s);
        this.elementRef.nativeElement.appendChild(mdb);
    }
}