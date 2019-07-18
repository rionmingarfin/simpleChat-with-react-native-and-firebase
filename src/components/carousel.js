import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Carousel, { dots } from 'react-native-smart-carousel';
// import SnowmanImage from './images/snowman1';

export default class Mycarousel extends Component {
    render() {
        const datacarousel = [
            {
                "id": 1,
                "imagePath": require('../../src/assets/1.png')
            },
            {
                "id": 2,
                "imagePath": require('../../src/assets/2.png')
            },
            {
                "id": 3,
                "imagePath": require('../../src/assets/3.png')
            },
            {
                "id": 4,
                "imagePath": require('../../src/assets/4.png')
            },
            {
                "id": 5,
                "imagePath": require('../../src/assets/5.png')
            },
        ];

        return (
            <ScrollView
                ref={(dots) => { this.parentScrollView = dots; }}>
                <Carousel
                    data={datacarousel}
                    autoPlay={true}
                    parallax={true}
                    playTime={3000}
                    parentScrollViewRef={this.parentScrollView}
                    navigation={true}
                    navigationColor={"black"}

                />
            </ScrollView>
        )
    }
}