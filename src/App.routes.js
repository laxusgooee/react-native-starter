import { createSwitchNavigator } from 'react-navigation';
import NavigationAuth from './modules/auth';
import NavigationMain from './modules/main';


export default ({verified, loggedIn }) => {
	return createSwitchNavigator(
	  {
	    Auth: NavigationAuth({verified: verified}),
	    Main: NavigationMain
	  },
	  {
	    initialRouteName: loggedIn? "Main" : "Auth"
	  }
	);
}