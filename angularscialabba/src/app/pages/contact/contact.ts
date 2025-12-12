import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  miformulario = new FormGroup({
    email: new FormControl(``, [Validators.required, Validators.email]),
    nombre: new FormControl(``, Validators.required),
    apellido: new FormControl(``, Validators.required,)
  })

  colecciondeusers: User[] = []

  enviardatos() {
    if (this.miformulario.valid) {
      const user: User = {
        email: this.miformulario.value.email!,
        nombre: this.miformulario.value.nombre!,
        apellido: this.miformulario.value.apellido!
      }

      this.colecciondeusers.push(user)

      alert("se agrego un nuevo usuario")
    }


    /*  this.miformulario = miformulario;
 
     const datos = this.miformulario.value
 
     alert(`email: ${datos.email}\n nombre: ${datos.nombre}\n apellido: ${datos.apellido} `
 
     ) */
  }


}
