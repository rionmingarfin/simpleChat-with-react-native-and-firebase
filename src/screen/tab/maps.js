import React,{Component} from 'react'
import {View, Text,TouchableOpacity, StyleSheet,Animated,Dimensions,Image,Modal,AsyncStorage,Button}from 'react-native';
import MapView, {Marker} from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/AntDesign';
import firebase from 'firebase';
import User from '../auth/user'
import { withNavigation } from 'react-navigation'

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

class Maps extends Component {
    constructor(props){
        super(props);
        this.state={
            longitude:'',
            latitude:'',
            data:[],
            modalVisible: false
        },
        this.getLocation()
    }

    getLocation = async()=>{
        await Geolocation.getCurrentPosition(
           (position) => {
             this.setState({
               latitude: position.coords.latitude,
               longitude: position.coords.longitude,
               error: null,
             });
           },
           (error) => this.setState({ error: error.message }),
           { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
         );
       }

    updateLocation = async() =>{
        if (this.state.latitude) {
            await firebase.database().ref('user/'+ User.uid).update({
                latitude: this.state.latitude,
                longitude: this.state.longitude
            })
        }
    }

    componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
    }

    componentDidMount(){
        firebase.database().ref('user').on('value', (data) =>{
            let values = data.val()
            if (values) {
                const messageList = Object.keys(values).map(key =>({
                  ...values[key],
                  uid: key
                }));
                this.setState({
                  data: messageList
                })
              }
        })

        this.animation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= this.state.data.length) {
              index = this.state.data.length - 1;
            }
            if (index <= 0) {
              index = 0;
            }
      
            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
              if (this.index !== index) {
                this.index = index;
                const coordinate = this.state.data[index];
                this.map.animateToRegion(
                  {
                    latitude: coordinate.latitude,
                    longitude: coordinate.longitude,
                    latitudeDelta: 0.02864195044303443,
                    longitudeDelta: 0.020142817690068,
                  },
                  350
                );
              }
            }, 10);
          });
    }


    render(){
        if (this.state.latitude) {
            this.updateLocation()  
            return(
                
                <View style={styles.container}>
                 <View style={styles.container}>
                   <MapView
                        ref={map => this.map = map}
                        style={styles.map}
                        region={{
                            "latitude": this.state.latitude,
                            "longitude": this.state.longitude,
                            latitudeDelta: 0.02864195044303443,
                            longitudeDelta: 0.020142817690068,
                        }}
                        >
                        {this.state.data.map((item)=>{
                            if(item.longitude == '' || item.uid == User.uid){
                                
                            }else{
                                return (
                                    <Marker
                                        coordinate={{
                                            latitude: item.latitude,
                                            longitude: item.longitude,
                                        }}
                                        title={item.name}
                                        description="in here"
                                    />
                                )
                            } 
                        })}
                        
                    </MapView>
                  <Animated.ScrollView
                        horizontal
                        scrollEventThrottle={1}
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={CARD_WIDTH}
                        onScroll={Animated.event(
                            [
                            {
                                nativeEvent: {
                                contentOffset: {
                                    x: this.animation,
                                },
                                },
                            },
                            ],
                            { useNativeDriver: true }
                        )}
                        style={styles.scrollView}
                        contentContainerStyle={styles.endPadding}
                        >
                        {this.state.data.map((marker, index) => {
                            if(marker.uid !== User.uid){
                                return(
                                    <TouchableOpacity>
                                        <View style={styles.card} key={index}>
                                        <Image
                                            source={{uri: marker.image}}
                                            style={styles.cardImage}
                                            resizeMode="cover"
                                        />
                                        <View style={styles.textContent}>
                                            <Text numberOfLines={1} style={styles.cardtitle}>{marker.name}</Text>
                                            <Text numberOfLines={1} style={styles.cardDescription}>
                                            {marker.email}
                                            </Text>
                                        </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </Animated.ScrollView>
                </View>
                </View>
                
            )    
        }
        return(
            <View style={styles.container}>
              <MapView
                   style={styles.map}
                   region={{
                       "latitude": -7.7613167,
                       "longitude": 110.3589596,
                       latitudeDelta: 0.015,
                       longitudeDelta: 0.0121,
                   }}>
               </MapView>
           </View>
       )    
    }
}
export default withNavigation(Maps)
const styles = StyleSheet.create({
    modelstyle:{
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
        justifyContent: 'center', 
		alignItems: 'center'
    },
    imageModal:{
        width: "80%",
        height: 180,
        textAlign: "center",
        alignSelf: "center",
        position: "relative",
        backgroundColor: "#FFF9EC",
        borderRadius: 5,
        elevation: 3
    },
    images:{
        marginTop: 10,
        height:70,
        width:70,
        borderRadius:30,
        alignSelf:'center'
    },
    textModal:{
        textAlign:'center',
        color:'#0CF60B',
        marginTop:2,
        fontWeight:"800"
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    view:{
        position:"absolute"
    },
    scrollView: {
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 1,
    },
    cardtitle: {
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(130,4,150, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,150, 0.5)",
    },
    fab: {
        position: 'absolute', 
        width: 58, 
        height: 57, 
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center', 
        left: 10, 
        top: 20, 
        backgroundColor: '#FFFCFC', 
        borderRadius: 50, 
        elevation: 3
    },
    fabRight: {
        position: 'absolute', 
        width: 58, 
        height: 57, 
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center', 
        right: 10, 
        top: 20, 
        backgroundColor: '#FFFCFC', 
        borderRadius: 50, 
        elevation: 3
    }
   });