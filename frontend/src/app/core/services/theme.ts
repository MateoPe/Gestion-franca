import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {

  private key = 'theme';

  initTheme() {
    const savedTheme = localStorage.getItem(this.key) || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(this.key, newTheme);
  }

  isDark(): boolean {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }
}
