import { Dimensions } from 'react-native';//def rem para el screen
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EStyleSheet from 'react-native-extended-stylesheet';

//containers
import Begin from './src/screen/containers/begin/begin';
import Details from './src/screen/containers/details/details';

// define REM depending on screen width
const entireScreenWidth = Dimensions.get('window').width;

// calc styles
EStyleSheet.build({
  $rem: entireScreenWidth / 300,
  $colorPrimary: '#8400b2',
  $colorSecondary: '#2edf6c',
  $colorGrayLight: '#a0a0a0',
  $colorLight: '#f2f2f2',
  $colorGray: '#616161',
});

const BeginStackNavigator = createStackNavigator({
  Begin: {
    screen: Begin,
    // navigationOptions:{
    //   headerShown: false,
    // },
  },
  Details: {
    screen: Details,
    navigationOptions:{
      headerShown: true,
    },
  },
});

const App =createSwitchNavigator({
  BeginStackNavigator: BeginStackNavigator
});

export default createAppContainer(App);