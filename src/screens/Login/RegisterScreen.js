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
import Icon from 'react-native-vector-icons/Feather'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "axios";
const API_URL = "https://customauthapi.herokuapp.com/api/";



const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
// const height =  width * aspectRatio ;
const SLIDE_HEIGHT = 0.61 * height;

const RegisterScreen = ({ navigation }) => {
  const [name, onChangeName] = React.useState("Name");
  const [text, onChangeText] = React.useState("Email");
  const [password, onChangePassword] = React.useState("Password");
  const [isLoading, setIsLoading] = React.useState(false);

  const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  };

  const onPressButton = async (event) => {
    setIsLoading(true);
    try {
      const response = await axios.post(API_URL + "user/login", {
        text,
        password,
      });
      // if (response.status === 201) {
        console.log(` You have created:`,response);
        setIsLoading(false);
        // setFullName('');
        // setEmail('');
      // } else {
      //   throw new Error("An error has occurred");
      // }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <View style={{ width }}>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 80, color: 'white', textAlign: 'center', lineHeight: 80 }}>Register</Text>
          </View>
          <TouchableOpacity style={styles.iconRight} onPress={() => navigation.goBack()}>
            <Icon name={'arrow-left-circle'} size={45} color={'#FFFFFF'}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'cyan' }} />
        <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75 }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
          />
          <TextInput
            style={styles.secondInput}
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            style={styles.secondInput}
            onChangeText={onChangePassword}
            value={password}
          />
          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15 }}>
            <TouchableOpacity>
              <Text style={{ color: '#47474D' }}>Create a new account ?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: '#47474D' }}>Forgot Password ?</Text>
            </TouchableOpacity>

          </View> */}

          <TouchableOpacity style={styles.loginBtn} onPress={onPressButton}>
            <Text style={styles.loginText}>Register</Text>
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
    transform: [{ translateY: (SLIDE_HEIGHT - 100) / 3 },
    { translateX: -width / 2 + 50 },
    { rotate: "90deg" }
    ]
  },
  iconRight: {
    alignSelf: 'flex-end',
    marginTop: 50,
    position: 'absolute',
    right: 20
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
    marginTop: 20,
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

export default RegisterScreen;
