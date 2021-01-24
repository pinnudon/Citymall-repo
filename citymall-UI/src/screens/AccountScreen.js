import React, {useContext} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import {Context as AuthContext} from '../context/AuthContext'
import Spacer from '../components/Spacer'
import {SafeAreaView} from 'react-navigation'
import Header from '../components/Header'
const AccountScreen = () => {
    const {signout} = useContext(AuthContext)
    return (
    <SafeAreaView forceInset={{top: 'always'}} style={{flex: 1, backgroundColor: '#fff0fc'}} >
    <View >
        {/* <Image
        style={styles.image}
        width='100%'
        height='100%'
        source={require('../../assets/city.jpg')}
        /> */}
        

        <View style={styles.container}>
            
        <Text style={{fontSize: 25, fontWeight: 'bold',alignSelf: 'center'}}>About Us</Text>
        
        <Text style={{fontSize: 20, marginTop: 10}} >CityMall</Text>
        <Text style={{fontSize: 15, marginTop: 15,alignSelf: 'center'}}>Address: 404, 4th Floor, Global Foyer Mall, Golf Course Road, Gurgaon - 122002
                Email: support@citymall.live
                Phone: 9999-019073
                Time: Mon-Sat (9:30 - 18:30)</Text>
                </View>
        
        <Spacer />
        <Spacer />
        <TouchableOpacity style={styles.but} onPress={signout} >
            <Text style={styles.text}>
                Sign Out
            </Text>
        </TouchableOpacity>
        
    </View>
    </SafeAreaView>
    )
}

AccountScreen.navigationOptions = ({navigation}) => {
    return {
        headerShown: true,
        headerTitle: ()=> <Header />
        
    }
}

const styles = StyleSheet.create({
    but: {
        // position: 'absolute',
        bottom:0,
        left:0,
        borderWidth: 2,
        // bottom: 0,
        // left: 1,
        width: '40%',
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#fa72fc'
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
        padding: 5,
        color: '#fa72fc',
        fontWeight: 'bold'
    },
    container: {
        alignSelf: 'center',
        padding: 10,
        marginTop: 5,
        

    },
    image: {
        opacity: 0.2
    }
})

export default AccountScreen 