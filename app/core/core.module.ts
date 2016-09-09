import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from '../app.routing';
import {UsuariosAddComponent} from '../usuarios/usuarios_add.component';
import {UsuariosReadComponent} from '../usuarios/usuarios_read.component';


@NgModule({
    imports: [BrowserModule,HttpModule,routing,FormsModule],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,appRoutingProviders,UsuariosAddComponent,UsuariosReadComponent],
    bootstrap: [LayoutComponent],
})

export class CoreModule{}
