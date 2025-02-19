import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // ... resto de tus métodos de autenticación
}
