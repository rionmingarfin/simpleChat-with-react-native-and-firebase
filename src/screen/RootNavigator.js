import { createAppContainer,createStackNavigator } from 'react-navigation'
import Home from './home';
import HomeAuth from './auth/homeAuth';
import Login from './auth/login';
import Register from './auth/register';

const createStack =createStackNavigator({
    home : {screen : Home},
    homeAuth : {screen :HomeAuth},
    login : {screen : Login},
    register: {screen : Register}
}, {
    headerMode : "none",
    navigationOptions : {
        headerVisible : false
    }
})

export default Appcontainer = createAppContainer(createStack)