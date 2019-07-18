import { createAppContainer,createStackNavigator } from 'react-navigation'
import Home from './home';
import HomeAuth from './auth/homeAuth';
import Login from './auth/login';
import Register from './auth/register';
import AuthLoadingScreen from './auth/authLoading';
import DetailChat from './detailChat';
import DetailFriend from './detailFriend';

const createStack =createStackNavigator({
    authLoading : {screen : AuthLoadingScreen},
    home : {screen : Home},
    homeAuth : {screen :HomeAuth},
    login : {screen : Login},
    register: {screen : Register},
    detailChat : {screen : DetailChat},
    detailFriend : {screen : DetailFriend}
}, {
    headerMode : "none",
    navigationOptions : {
        headerVisible : false
    }
})

export default Appcontainer = createAppContainer(createStack)