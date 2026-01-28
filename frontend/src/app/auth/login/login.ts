import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  role = 'USER';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (!this.email) {
      this.error = 'El correo es obligatorio';
      return;
    }

    // Login simulado
    localStorage.setItem('auth', JSON.stringify({
      email: this.email,
      role: this.role
    }));

    this.router.navigate(['/dashboard']);
  }

}
