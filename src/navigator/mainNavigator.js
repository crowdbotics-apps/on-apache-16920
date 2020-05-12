import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps44203Navigator from '../features/Maps44203/navigator';
import Add-Item44199Navigator from '../features/Add-Item44199/navigator';
import Maps44198Navigator from '../features/Maps44198/navigator';
import UserProfile44180Navigator from '../features/UserProfile44180/navigator';
import Maps44161Navigator from '../features/Maps44161/navigator';
import Settings44139Navigator from '../features/Settings44139/navigator';
import Settings44124Navigator from '../features/Settings44124/navigator';
import NotificationList44123Navigator from '../features/NotificationList44123/navigator';
import Maps44122Navigator from '../features/Maps44122/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps44203: { screen: Maps44203Navigator },
Add-Item44199: { screen: Add-Item44199Navigator },
Maps44198: { screen: Maps44198Navigator },
UserProfile44180: { screen: UserProfile44180Navigator },
Maps44161: { screen: Maps44161Navigator },
Settings44139: { screen: Settings44139Navigator },
Settings44124: { screen: Settings44124Navigator },
NotificationList44123: { screen: NotificationList44123Navigator },
Maps44122: { screen: Maps44122Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
