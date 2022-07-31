import 'react-native-gesture-handler'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores/index'
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './screens/Login/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Welcome.\n \nForget about remembering your subscriptions and their due dates. Just add and you will be notified ',
    image: require('./assets/first2.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Manage your finance and money management solutions are provided too',
    image: require('./assets/second2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'Lead a better life with balancing your money \n \n Let\'s go',
    image: require('./assets/third.png'),
    backgroundColor: '#22bcb5',
  }
];

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // const _renderItem = ({ item }) => {
  //   return (
  //     <View style={styles.slide}>
  //       <Text style={styles.title}>{item.title}</Text>
  //       <Image source={item.image} />
  //       <Text style={styles.text}>{item.text}</Text>
  //     </View>
  //   );
  // }
  const _renderItem = ({ item }: { item: Item }) => {
    return (
      <ImageBackground style={styles.slide} source={item.image}>
        <Text style={styles.text}>{item.text}</Text>
      </ImageBackground>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <TouchableOpacity style={styles.buttonCircle} onPress={_onDone}>
        <Icon
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </TouchableOpacity>
    );
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('auth', 'logged')
    } catch (e) {
      // saving error
    }
  }

  const _onDone = () => {
    setShowRealApp(true);
    setShowLogin(true);
    storeData(true);
  }



  return (
    <>
      {/* {showLogin ?
        <Login />
        :
        <> */}
          {showRealApp ?
            <Provider store={store}>
              <MainNavigation />
            </Provider>
            :
            <AppIntroSlider
              renderItem={_renderItem}
              data={slides}
              // onDone={_onDone} 
              renderDoneButton={_renderDoneButton}
              renderNextButton={_renderNextButton}
            />
          }
{/* 
        </>
      } */}
    </>

  )
}


const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: '#333',
    marginTop: 92,
    textAlign: 'center',
  },
});


export default App
