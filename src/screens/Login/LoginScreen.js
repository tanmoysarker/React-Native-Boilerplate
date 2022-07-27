import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView
} from 'react-native'
// import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'


const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
// const height =  width * aspectRatio ;
const SLIDE_HEIGHT = 0.61 * height;

const Login = ({ navigation }) => {
  return (
      // <View>
      //   <View style={{flex:1,backgroundColor : "white"}}>
      //       <View  style={{borderBottomLeftRadius:50, height: height * 0.61, overflow: 'hidden'}}>
      //           <Image source={require("./background.jpg")} style={{width: width, height: height, borderBottomLeftRadius: 50}}/>
      //       </View>
      //       <View style={{flex:1}}>
      //           <Image source={require("./background.jpg")} style={{...StyleSheet.absoluteFillObject ,width: width, height: height, borderBottomLeftRadius: 50}}/>
      //           <View style={{borderRadius:50, borderTopLeftRadius: 0, backgroundColor: 'white', flex: 1}}>

      //           </View>
      //       </View>
      //   </View>
      // </View>
      <View style={styles.container}>
        <View style={styles.slider}>
          <View style={{width}}>
            <View style={styles.titleContainer}>
              <Text style={{fontSize: 80, color: 'white', textAlign: 'center', lineHeight: 80}}> First</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'cyan'}}/>
          <View style={{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75}}>

          </View>
        </View>
      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slider: {
    height: 0.61 * height,
    backgroundColor: "cyan",
    borderBottomRightRadius: 75
  },
  footer: {
    flex: 1
  },
  titleContainer: {
    // backgroundColor: 'red', 
    height: 100, 
    justifyContent: 'center', 
    transform : [{ translateY: (SLIDE_HEIGHT - 100) / 2 },
    {translateX: -width/ 2 + 50},
    {rotate: "90deg"}
   ] 
  }
});

export default Login
