import { createAppContainer,createStackNavigator ,createSwitchNavigator} from 'react-navigation'
import Home from './home';
import HomeAuth from './auth/homeAuth';
import Login from './auth/login';
import Register from './auth/register';
import AuthLoadingScreen from './auth/authLoading';
import DetailChat from './detailChat';
import DetailFriend from './detailFriend';

const createStack =createStackNavigator({
    home : {screen : Home},
    detailChat : {screen : DetailChat},
    detailFriend : {screen : DetailFriend}
}, {
    headerMode : "none",
    navigationOptions : {
        headerVisible : false
    }
})
const stackAuth = createStackNavigator({
    homeAuth : {screen :HomeAuth},
    login : {screen : Login},
    register: {screen : Register},
},{
    headerMode : "none",
    navigationOptions : {
        headerVisible : false
    }
})

const createSwitch =createSwitchNavigator({
    authLoading : {screen : AuthLoadingScreen},
    App : createStack,
    Auth : stackAuth

},{
    initialRouteName : 'authLoading'
})

export default Appcontainer = createAppContainer(createSwitch)