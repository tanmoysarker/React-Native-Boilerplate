import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  TextInput
} from 'react-native'
// import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from "react-native-vector-icons/FontAwesome";



const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
// const height =  width * aspectRatio ;
const SLIDE_HEIGHT = 0.61 * height;

const Login = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Email");
  const [password, onChangePassword] = React.useState("Password");

  const onPressButton = () => {
    console.log('Pressed')
  }

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
        <View style={{ width }}>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 80, color: 'white', textAlign: 'center', lineHeight: 80 }}> First</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'cyan' }} />
        <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            style={styles.secondInput}
            onChangeText={onChangePassword}
            value={password}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15 }}>
            <TouchableOpacity>
              <Text style={{ color: '#47474D' }}>Create a new account ?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: '#47474D' }}>Forgot Password ?</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.loginBtn} onPress={onPressButton}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={{ borderRadius: 5, paddingVertical: 10, paddingHorizontal: 30, flexDirection: 'row', backgroundColor: '#3578E5' }}
            onPress={() => this.signInFacebook(context.updateAuthUser)}>
            <FontAwesome name='facebook' size={20} color='#fff' />
          </TouchableOpacity> */}
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
    height: 0.41 * height,
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
    transform: [{ translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: -width / 2 + 50 },
    { rotate: "90deg" }
    ]
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 80,
    borderRadius: 5
  },
  secondInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
    borderRadius: 5
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "cyan",
    alignSelf: 'center'
  },
});

export default Login
