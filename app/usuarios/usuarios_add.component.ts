import {
  Component
} from '@angular/core';
import {
  Usuarios
} from './usuarios';
import {
  UsuariosService
} from '../services/usuarios.service';

import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/usuarios/usuarios_add.component.html',
  providers: [UsuariosService]
})
export class UsuariosAddComponent {
  constructor(private usuariosservice: UsuariosService,private router: Router) {}
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

  newUser() {
    this.usuariosservice.newUser(this.model)
    this.active = false;
    setTimeout(() => this.active = true, 1);
    this.router.navigate(['/']);
  }

}