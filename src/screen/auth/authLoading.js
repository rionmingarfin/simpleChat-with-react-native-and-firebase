import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import User from './user';


export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    User.uid = await AsyncStorage.getItem('uid');
    this.props.navigation.navigate(User.uid ? 'home' : 'homeAuth');
  };
componentWillMount() {
    const config = {
      apiKey: "AIzaSyDDBia9FbIGALRaCrpi6dTm2u9n7SitsxU",
      authDomain: "ashterchat.firebaseapp.com",
      databaseURL: "https://ashterchat.firebaseio.com",
      projectId: "ashterchat",
      storageBucket: "",
      messagingSenderId: "769846037185",
      appId: "1:769846037185:web:861871279f19f7ee"
    }
}
  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}