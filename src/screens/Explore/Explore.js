import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonComp from '../../components/ButtonComp';
import HeaderComp from '../../components/HeaderComp';
import navigationStrings from '../../constants/navigationStrings';

// create a component
const Explore = ({navigation}) => {

    const goToScreen = () => {
        navigation.navigate(navigationStrings.SEARCH)
    }

    return (
        <View style={styles.container}>
             <SafeAreaView style={{ marginHorizontal: 24 }}>
                 <HeaderComp text="Explore" />
                <ButtonComp
                    btnText="Search"
                    onPress={goToScreen}
                />

            </SafeAreaView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default Explore;