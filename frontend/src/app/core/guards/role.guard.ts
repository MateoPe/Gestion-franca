import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);

  const auth = localStorage.getItem('auth');
  if (!auth) {
    router.navigate(['/login']);
    return false;
  }

  const user = JSON.parse(auth);
  const allowedRoles = route.data['roles'] as string[];

  if (!allowedRoles.includes(user.role)) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
