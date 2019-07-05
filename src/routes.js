import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Signup from '~/pages/Signup';

import Home from '~/pages/Home';
import FoodTypes from '~/pages/FoodTypes';
import FoodSize from '~/pages/FoodSize';
import Cart from '~/pages/Cart';
import FinishOrder from '~/pages/FinishOrder';
import MyOrders from '~/pages/MyOrders';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Signup,
    Logged: createStackNavigator(
      {
        Home,
        FoodTypes,
        FoodSize,
        Cart,
        FinishOrder,
        MyOrders,
      },
      {
        headerMode: 'none',
      },
    ),
  }),
);

export default Routes;
