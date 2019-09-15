import { NavigationScreenComponent } from 'react-navigation';

import FeedScreen from '../screens/Feed';
import FavoritesScreen from '../screens/Favorites';
import TicketsScreen from '../screens/Tickets';

export interface Path {
  name: string;
  screen: NavigationScreenComponent;
  iconName: string;
  initial?: boolean;
}

const paths: Path[] = [
  {
    name: 'Feed',
    screen: FeedScreen,
    iconName: 'list',
    initial: true,
  },
  {
    name: 'Favorites',
    screen: FavoritesScreen,
    iconName: 'heart',
  },
  {
    name: 'Tickets',
    screen: TicketsScreen,
    iconName: 'ticket',
  },
];

export default paths;
