import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { Route } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  password: string = '';
  error: string = '';
    constructor(private router: Router) {}
  onSubmit() {
    if (!this.email || !this.password) {
      this.error = "Complete todos los campos";
      return;
    }

    // Simulación de login
    if (this.email === "admin@admin.com" && this.password === "123456") {
      this.error = "";
      alert("Login exitoso 🎉");
    } else {
      this.error = "Credenciales incorrectas";
    }
  }
    ingresar() {
      // aquí luego pones tú lógica de validación
      this.router.navigate(['/dashboard']);
  }
  goToRegister() {
  this.router.navigate(['/register']);
}

}
