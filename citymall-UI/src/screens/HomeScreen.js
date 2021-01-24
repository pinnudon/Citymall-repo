import React, {useEffect, useState} from 'react'
import {Text, View, FlatList,StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {Button, Image} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import DetailComp from '../components/DetailComp'
import Spinner from '../components/Spinner'
import Upcoming from '../components/Upcoming'
import Header from '../components/Header'
const HomeScreen = ({navigation}) => {
    
    
    return (
        
        <>
        <ScrollView style={{backgroundColor: '#fff0fc'}}>
            <DetailComp title="Popular" navigation={navigation} />
            <Upcoming title="Upcoming" navigation={navigation} />
            </ScrollView>
        </>
    )
}
HomeScreen.navigationOptions = ({navigation}) => {
    return {
        headerShown: true,
        headerTitle: ()=> <Header />
    }
    
}



export default HomeScreen 