import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet,AsyncStorage } from 'react-native'
import User from '../auth/user'
import firebase from 'firebase'
import { withNavigation } from 'react-navigation'


class FlatListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('detailFriend', this.props.item) }}
                    style={styles.button}>
                    <View style={styles.parenImage}>
                        <Image
                            source={{ uri: this.props.item.image }}
                            style={styles.image} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.TextName}>{this.props.item.name}</Text>
                        <Text style={styles.TexContent}>{this.props.item.content}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class Friend extends Component {
    state = {
        user: [],
    }
   async componentWillMount() {
        this.setState({
            myuid : await AsyncStorage.getItem('uid')
        })
        let dbRef = firebase.database().ref('user');
        dbRef.on('child_added', val => {
            let person = val.val();
            person.uid = val.key;
            if (person.uid === this.state.myuid) {
                User.name = person.name
            }else{
                this.setState((prevState) => {
                    return {
                        user: [...prevState.user, person]
                    }
                })
            }
        })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.user}
                    numColumns={1}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem navigation={this.props.navigation} item={item} index={index}>

                            </FlatListItem>
                        )
                    }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderColor: '#c4c4c4',
        margin: 4,
    },
    container: {
        flex: 1
    },
    parenImage: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    content: {
        flex: 4,
        paddingLeft: 17,
    },
    TexContent: {
        fontSize: 13,
    },
    TextName: {
        fontSize: 17,
        color: "#1c1c1c"
    }
});

export default withNavigation(Friend)