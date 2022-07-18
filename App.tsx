import React from 'react';
import { View, Text } from 'react-native';
import Routes from './src/navigation/Routes';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

const App = () => {

  return (
    <Provider store={Store}>
      <View style={{ flex: 1 }}>
          <Routes />
          <Text>dvfdvfdvd</Text>
      </View>
    </Provider>
   
  );
};

export default App;