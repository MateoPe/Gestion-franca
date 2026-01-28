import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MENU_ITEMS } from '../../core/config/menu.config';
import { Theme } from '../../core/services/theme';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  public userName:string | any;
  public role:string | any;

  ngOnInit(): void {
    const auth = localStorage.getItem('auth');

    if (auth) {
      this.user = JSON.parse(auth);
      this.userName = this.user?.email;
      this.role = this.user?.role;
    }
  }

  user = JSON.parse(localStorage.getItem('auth') || '{}');
  menu = MENU_ITEMS.filter(item =>
    item.roles.includes(this.user.role)
  );

  isDark = false;

  constructor(private router: Router, private themeService: Theme) {
    this.isDark = this.themeService.isDark();
  }

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDark = this.themeService.isDark();
  }
}
