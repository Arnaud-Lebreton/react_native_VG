import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

class Contact extends Component {
  static navigationOptions = {
    drawerLabel: 'Contactez moi',
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#4682b4',
            flexDirection: 'row',
            padding: 15,
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: 'black',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image
              source={require('../../assets/img/ico_burger.png')}
              style={{width: 50, height: 50}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              letterSpacing: 2,
              fontWeight: 'bold',
              textAlignVertical: 'center',
              textAlign: 'center',
              fontFamily: 'sans-serif-medium',
            }}>
            Contact
          </Text>
        </View>
        <View style={{flex: 2, marginTop: 40}}>
          <Text style={styles.text}>Des questions ? Des remarques ?</Text>
          <Text style={styles.text}>Nom</Text>
          <TextInput style={styles.textInput} placeholder="Nom..." />
          <Text style={styles.text}>Prénom</Text>
          <TextInput style={styles.textInput} placeholder="Prénom..." />
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Email..." />
          <Text style={styles.text}>Message</Text>
          <TextInput style={styles.textInput} placeholder="Votre message..." />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#4682b4',
                alignSelf: 'stretch',
                height: 50,
              }}
              onPress={() => Alert.alert('Merci pour votre message')}>
              <Text
                style={{fontSize: 25, fontWeight: 'bold', letterSpacing: 1}}>
                Confirmer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Contact;

const styles = StyleSheet.create({
  text: {
    marginStart: 15,
    marginBottom: 5,
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    marginStart: 15,
  },
});
