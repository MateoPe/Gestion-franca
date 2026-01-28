import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);

  // 👇 Protección SSR / Vite
  if (typeof window === 'undefined') {
    return false;
  }

  const auth = localStorage.getItem('auth');

  if (auth) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
