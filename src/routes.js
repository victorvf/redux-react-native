import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
    createStackNavigator(
        { Home, Cart },
        {
            defaultNavigationOptions: {
                headerBackTitleVisible: false,
                headerTitleAlign: 'left',
                headerStyle: {
                    backgroundColor: '#141419',
                },
                headerTintColor: '#fff',
            },
        }
    )
);

export default Routes;
