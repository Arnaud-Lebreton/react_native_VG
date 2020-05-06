import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {SafeAreaView, ScrollView, View, Image, Text} from 'react-native';
import React from 'react';

import SplashScreen from './components/loading/SplashScreen';
import Home from './components/home/Home';
import News from './components/news/News';
import BestGames from './components/bestGames/BestGames';
import Contact from './components/contact/Contact';

const customDrawer = props => (
  <SafeAreaView style={{flex: 1}}>
    <View
      style={{
        height: 150,
        backgroundColor: '#4682b4',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <Image
        source={require('./assets/img/ico_burger.png')}
        style={{height: 70, width: 70}}
      />
      <Text style={{marginStart: 15, fontSize: 30, fontWeight: 'bold'}}>
        PCVG
      </Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 5,
        alignItems: 'center',
      }}>
      <Image
        source={require('./assets/img/game_over.png')}
        style={{height: 80, width: 80, margin: 5}}
      />
      <Text style={{textAlign: 'center', fontSize: 15, color: '#4682b4'}}>
        Version 0.1 by @Arnaud
      </Text>
    </View>
  </SafeAreaView>
);

const appDrawer = createDrawerNavigator(
  {
    Home: Home,
    News: News,
    Games: BestGames,
    Contact: Contact,
  },
  {
    contentComponent: customDrawer,
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      App: appDrawer,
      Loading: SplashScreen,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

export default App;
