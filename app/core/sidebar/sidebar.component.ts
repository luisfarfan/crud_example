import { Component, AfterViewInit } from '@angular/core';
import {MenuServices} from '../services/menu.service';


@Component({
    selector: 'sidebar',
    templateUrl: 'app/core/sidebar/sidebar.component.html',
    providers: [MenuServices]
})

export class SidebarComponent {
    private sidebar:any;
    
    constructor(private menuservices: MenuServices){
       
    }
}
