import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Settings
} from 'react-native'
import styles from '../Home/Home.style'
import Icon from 'react-native-vector-icons/Ionicons'

const Setting = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-settings'} size={100} color={'green'} />
          <View>
            <TouchableOpacity
              onPress={() => Alert.alert('this is Profile Screen')}
              style={styles.buttonStyle}>
              <Text style={styles.text}>
                this is{' '}
                <Text style={{ fontWeight: 'bold', color: 'green' }}>
                  {' '}
                  Setting{' '}
                </Text>{' '}
                screen
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 10
          }}>
          <Text style={{ color: '#808080' }}>by Tanmoy</Text>
        </View>
      </SafeAreaView>
    </>
  )
}

export default Setting
