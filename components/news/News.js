import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';

class News extends Component {
  static navigationOptions = {
    drawerLabel: 'Sorties',
  };

  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    fetch(
      'https://api.rawg.io/api/games?dates=2020-06-01,2020-12-31&ordering=-added&platforms=4',
    )
      .then(res => res.json())
      .then(
        data => {
          let dataSplice = data.results.splice(0, 10);
          this.setState({
            news: dataSplice,
          });
          console.log(data.results);
        },
        error => {
          console.log(error);
        },
      );
  };

  format = () => {
    return this.state.news.map((element, index) => {
      return (
        <View
          key={index}
          style={{
            flexDirection: 'column',
            height: 275,
          }}>
          <View>
            <Image
              source={{uri: element.background_image}}
              style={{height: 200, resizeMode: 'stretch'}}
            />
          </View>
          <View
            style={{
              margin: 10,
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
              textAlign: 'center',
              fontFamily: 'sans-serif-medium',
            }}>
            Prochaines Sorties
          </Text>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={{flexDirection: 'column'}}>{this.format()}</View>
        </ScrollView>
      </View>
    );
  }
}

export default News;
