import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {PacmanIndicator} from 'react-native-indicators';

const imgBackGround = require('../../assets/img/background_splashscreen.jpg');
const icone = require('../../assets/img/ico_splashscreen.png');

class SplashScreen extends Component {
  /******** Chargement de l'application en millisecondes **********/
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 10000);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imgBackGround} style={styles.imgBackGround}>
          <Image source={icone} style={styles.icone} />
          <Text style={styles.text}>PC Video Games</Text>
          <PacmanIndicator size={100} color="white" />
        </ImageBackground>
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackGround: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icone: {
    width: 75,
    height: 75,
    marginTop: 50,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 25,
  },
});
