import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import Entypo from 'react-native-vector-icons/dist/Entypo'



class FlatListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
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
    DumyData = [
        {
            'key': '1',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '2',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '3',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '4',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '5',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '6',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '7',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '8',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '9',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '10',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '11',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
        {
            'key': '12',
            "image": "http://golem13.fr/wp-content/uploads/2017/11/chat-double-face-chim%C3%A8re-700x460.jpg",
            'name' : 'Rion Ming Arfin',
            'content': 'aku pasti bisa'
        },
    ]
    render() {
        return (
            <View>
                <FlatList
                    data={this.DumyData}
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
        margin:4,
    },
    container : {
        flex :1
    },
    parenImage : {
        flex :1,
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    content : {
        flex : 4,
        paddingLeft: 17,
    },
    TexContent : {
        fontSize: 13,
    },
    TextName : {
        fontSize: 17,
        color :"#1c1c1c"
    }
});

export default Friend