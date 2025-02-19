import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ]
})
export class AppComponent {
  isLoggedIn = false;
  showUserMenu = false;
  user?: {
    name: string;
    avatar: string;
  };

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  logout() {
    this.isLoggedIn = false;
    this.user = undefined;
    this.showUserMenu = false;
  }
}
