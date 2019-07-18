import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
import HeaderBack from '../components/headerBack';

export default class DetailFriend extends Component {
    render() {
        console.warn(this.props.navigation.state.params)
        return (
            <View style={{ flex: 1 }}>
                <HeaderBack navigation={this.props.navigation}/>
                <View style={styles.bacImage}>
                    <Image
                        source={{ uri: this.props.navigation.state.params.image }}
                        style={styles.image} />
                </View>
                <View style={styles.parentText}>
                    <View style={styles.headerText}>
                        <Text style={styles.Text}>{this.props.navigation.state.params.name}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    Text: {
        fontSize: 22,
        color: '#2b2b2b'
    },
    parentText: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 17,
    },
    headerText: {
        borderColor: '#6e6e6e',
        paddingHorizontal: 17,
        borderBottomWidth: 1,
        borderColor: '#a6a4a4',
        borderBottomWidth: 1
    },
    bacImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#6ea0f0'
    }
})