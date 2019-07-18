import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, AsyncStorage } from 'react-native'
import Header from '../components/header';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Chat from './tab/chat'
import Friend from './tab/friend'
import Maps from './tab/maps'
import User from './auth/user';
export default class Home extends Component {
	state = {
		index: 0,
		routes: [
			{ key: 'Chat', title: 'Chat' },
			{ key: 'Friend', title: 'Friend' },
			{ key: 'Maps', title: 'Maps' },
		],
	};

	render() {
		return (
			<React.Fragment>
				<Header />
				{/* <Text>{User.phone}</Text> */}
				{/* <Text>{User.email}</Text> */}
				<TabView
					navigationState={this.state}
					labelStyle={{ backgroundColor: 'red' }}
					renderScene={SceneMap({
						Chat: Chat,
						Friend: Friend,
						Maps: Maps

					})}
					onIndexChange={index => this.setState({ index })}
					initialLayout={{ width: Dimensions.get('window').width, height: 100 }}
					renderTabBar={props =>
						<TabBar
							{...props}
							indicatorStyle={{ backgroundColor: 'white' }}
							style={styles.tabNav}
							labelStyle={styles.labelStyle}
						/>
					}
				/>
			</React.Fragment>
		)
	}
}

const styles = StyleSheet.create({
	tabNav: {
		backgroundColor: '#6ea0f0'
	},
	labelStyle: {
		fontSize: 12
	}
})
