import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import { createStackNavigator } from 'react-navigation-stack';



const navigator = createStackNavigator(
  {
    Search:SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions:{
      title: 'Business Search'
  }
});


export default createAppContainer(navigator);

// React navigator provides three objects for navigating in our app -
// 1. Drawer Navigation 2. BottomTabNavigator 3. StackNavigator

// import { createStackNavigator } from 'react-navigation-stack'