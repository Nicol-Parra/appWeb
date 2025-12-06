
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  nombre = '';
  email = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  registrar() {
    if (!this.nombre || !this.email || !this.password) {
      this.error = "Complete todos los campos.";
      return;
    }

    alert("Registro exitoso 🎉");
    this.router.navigate(['/login']);
  }
    goToIngresar() {
  this.router.navigate(['/login']);
}
}
