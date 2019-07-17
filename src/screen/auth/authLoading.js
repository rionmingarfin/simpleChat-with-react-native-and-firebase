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
    User.phone= await AsyncStorage.getItem('phone');
    this.props.navigation.navigate(User.phone ? 'home' : 'homeAuth');
  };
componentWillMount() {
    const config = {
        apiKey: "AIzaSyDk4kfNQQJl3vGxBdFwbPVj3m_7QM7Ns04",
        authDomain: "simplechat-d58fc.firebaseapp.com",
        databaseURL: "https://simplechat-d58fc.firebaseio.com",
        projectId: "simplechat-d58fc",
        storageBucket: "",
        messagingSenderId: "969039521493",
        appId: "1:969039521493:web:34da4d136e28e0d2"
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