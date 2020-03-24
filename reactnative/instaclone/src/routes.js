import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Feed from './pages/Feed';

//const RootStack = createStackNavigator({Feed});
//const Routes = createAppContainer(RootStack);

const Routes = createAppContainer(createStackNavigator({Feed}));

export default Routes;
