import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
// import {withNavigation} from 'react-navigation'


const Header = () => {
   
    return (
        <View style={styles.header}>
            <View>
            <Text style={styles.headerText}>CityMall</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    }
})
export default Header