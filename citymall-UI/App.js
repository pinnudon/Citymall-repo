import React from 'react'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack' 
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from './src/screens/HomeScreen'
import AccountScreen from './src/screens/AccountScreen'
import DetailScreen from './src/screens/DetailScreen'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Header from './src/components/Header'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import {Provider as AuthProvider} from './src/context/AuthContext'
import {setNavigator} from './src/navigationRef'


const loginFlow = createStackNavigator({
  Signup: SignupScreen,
  Signin : SigninScreen
},{
  defaultNavigationOptions : {
    showHeader: false
  }
})

loginFlow.navigationOptions = {
  showHeader: false
}

const homeFlow = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
})

homeFlow.navigationOptions = {

    tabBarIcon : <Feather name="home" size={20} color="black" />
  
}

const accountFlow = createStackNavigator({
  Account: AccountScreen,
  Detail: DetailScreen
},{
  defaultNavigationOptions: {
    showHeader: false
  }
})

accountFlow.navigationOptions = {
  title: 'Account',
  tabBarIcon : <MaterialIcons name="account-circle" size={24} color="black" />,
  showHeader: false
}

const switchNavigator = createSwitchNavigator({
  loginFlow,
  Citymall: createBottomTabNavigator({    
    Home: homeFlow,
    Account: accountFlow 
  },{
    navigationOptions : {
      headerTitle: ()=> <Header />
    }
  })
  
})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator)=> {setNavigator(navigator)} } />
    </AuthProvider>
  )
}