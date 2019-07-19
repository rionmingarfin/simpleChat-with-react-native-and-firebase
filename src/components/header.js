import React, { Component } from 'react'
import { Text, View, TouchableOpacity,AsyncStorage } from 'react-native'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import Menu, { MenuItem } from 'react-native-material-menu';
import { withNavigation } from 'react-navigation';

class Header extends Component {
    _menu = null;
    setMenuRef = ref => {
        this._menu = ref;
    };

    showMenu = () => {
        this._menu.show();
    };
    hideLogout = async () => {
        let keys = ['uid','name','image']
        await AsyncStorage.multiRemove(keys, (error)=>{
            this.props.navigation.navigate('homeAuth')
            // this._menu.hide();
            console.log(error)
        });
        
      };
    render() {
        return (
            <View style={{ padding: 8, backgroundColor: '#6ea0f0', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center', }}>
                    <Text style={{ color: '#FFFFFF', alignItems: 'center', fontSize: 24, paddingLeft: 8, }}>Ashter</Text>
                </View>
                <Menu
                    ref={this.setMenuRef}
                    button={<Text onPress={this.showMenu}>
                        <Entypo name='dots-three-vertical' size={25} color='#f5f6f7' />
                    </Text>}
                >
                    <MenuItem onPress={this.hideLogout}>log out</MenuItem>
                </Menu>
            </View>
        )
    }
}

export default withNavigation(Header)