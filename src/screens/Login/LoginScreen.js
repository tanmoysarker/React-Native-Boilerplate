import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'


const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height =  width * aspectRatio ;


const Login = ({ navigation }) => {
  return (
      <View>
        <View style={{flex:1,backgroundColor : "white"}}>
            <View  style={{borderBottomLeftRadius:50, height: height * 0.61, overflow: 'hidden'}}>
                <Image source={require("./background.jpg")} style={{width: width, height: height, borderBottomLeftRadius: 50}}/>
            </View>
            <View style={{flex:1}}>
                <Image source={require("./background.jpg")} style={{...StyleSheet.absoluteFillObject ,width: width, height: height, borderBottomLeftRadius: 50}}/>
                <View style={{borderRadius:50, borderTopLeftRadius: 0, backgroundColor: 'white', flex: 1}}>

                </View>
            </View>
        </View>
      </View>
    
  )
}

export default Login
