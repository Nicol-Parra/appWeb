import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  password: string = '';
  error: string = '';

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
}
