import { MenuItem } from '../models/menu-item.model';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    roles: ['ADMIN', 'USER']
  },
  {
    label: 'Usuarios',
    route: '/usuarios',
    roles: ['ADMIN', 'USER']
  },
  {
    label: 'Pedidos',
    route: '/pedidos',
    roles: ['ADMIN', 'USER']
  },
  {
    label: 'Pagos',
    route: '/pagos',
    roles: ['ADMIN']
  }
];
