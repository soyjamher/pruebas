import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'PLD',
    icon: 'shield-outline',
    children: [
      {
        title: 'User',
        link: '/afirme/pld/user',
      },
      {
        title: 'Example',
        link: '/afirme/pld/example',
      },
    ],
  },
]
