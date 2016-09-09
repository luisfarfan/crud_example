import {
    Component
} from '@angular/core';
import {
    UsuariosService
} from '../services/usuarios.service';
import {
    Usuarios
} from './usuarios';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/usuarios/usuarios_read.component.html',
    providers: [UsuariosService]
})
export class UsuariosReadComponent {
    private users: Object;
    private user: Usuarios ;
    constructor(private usuariosservice: UsuariosService,private router: Router) {
        this.getUsers()
        this.user=this.model
    }

    model = new Usuarios();

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

    jsonModel() {
        return this.model;

    }

    active = true;

    getUsers(){
        this.usuariosservice.getUsers().subscribe((data) => {
            this.users = data
        })
    }

    editUser(url: string) {
        this.usuariosservice.getUsers(url).subscribe((data) => {
            this.user = <Usuarios>data
            this.model.dni=this.user.dni
            this.model.ape_mat_per=this.user.ape_mat_per
            this.model.ape_mat_per=this.user.ape_mat_per
            this.model.email_insti=this.user.email_insti
            this.model.usuario=this.user.usuario
        })
    }
    save(url:string,obj) {
        //this.submitted = true; // set form submit to true
        console.log(obj)
        console.log(this.usuariosservice.editUser(url,obj))
        //$('#modal-contact').modal('hide')
        this.getUsers()
        
    }
}