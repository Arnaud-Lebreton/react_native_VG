import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Video from 'react-native-video';

class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Accueil',
  };

  constructor(props) {
    super(props);
    this.state = {
      monthData: [],
    };
  }

  componentDidMount() {
    this.getHome();
  }

  getHome = () => {
    fetch(
      'https://api.rawg.io/api/games?dates=2020-04-01,2020-04-30&ordering=-added&platforms=4',
    )
      .then(res => res.json())
      .then(
        data => {
          let dataSplice = data.results.splice(0, 10);
          this.setState({
            monthData: dataSplice,
          });
          console.log(this.state.monthData);
        },
        error => {
          console.log(error);
        },
      );
  };

  format = () => {
    return this.state.monthData.map((element, index) => {
      return (
        <View
          key={index}
          style={{
            flexDirection: 'column',
            height: 275,
          }}>
          <View>
            {/*<Image
              source={{uri: element.background_image}}
              style={{height: 200, resizeMode: 'stretch'}}
            />*/}
            <Video
              source={{uri: element.clip.clip}}
              ref={ref => {
                this.player = ref;
              }}
              onBuffer={this.onBuffer}
              onError={this.videoError}
              onEnd={this.onEnd}
              onLoad={this.onLoad}
              paused={this.state.paused}
              onProgress={this.onProgress}
              onLoadStart={this.onLoadStart}
              resizeMode="stretch"
              style={{
                height: 200,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              marginStart: 10,
              marginEnd: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, fontWeight: '600'}}>
              {element.name}
            </Text>
            <Text style={{fontSize: 15, fontWeight: '600'}}>
              Sortie : {element.released}
            </Text>
          </View>
          <View
            style={{
              marginStart: 10,
              marginEnd: 10,
            }}>
            <Text style={{fontSize: 15, fontWeight: '600'}}>
              Genre : {element.genres[0].name}
            </Text>
          </View>
        </View>
      );
    });
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
              fontFamily: 'sans-serif-medium',
            }}>
            Actualités Jeux Vidéo PC
          </Text>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={{flexDirection: 'column'}}>{this.format()}</View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
