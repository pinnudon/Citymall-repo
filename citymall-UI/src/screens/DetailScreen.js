import React from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import {Image} from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/Header'
const DetailScreen = ({navigation}) => {
    const item = navigation.getParam('item')
    const avg=item.vote_average*10
    return (
        <View style={{backgroundColor: '#fff0fc', flex: 1}}>
            <ScrollView >
        <View style={styles.container}>

            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={{ width: 250, height: 300, marginLeft: 10, borderRadius: 5 }}
                        />
            <Text style={styles.text3} >{avg}%<Text style={{fontSize: 12, opacity: 0.6}}> {item.vote_count} ratings</Text></Text>
            <AntDesign name="hearto" size={28} color="red" style={styles.like} />
            <Text style={styles.text1}>{item.original_title}</Text>

        </View>
        <Text style={styles.text2}>Language: {item.original_language}</Text>

        <Text style={{fontSize: 20, alignSelf: 'center'}}>Movie Overview:</Text>
        <Text style={{marginLeft: 10}}>{item.overview}</Text>
        </ScrollView>
        </View>
    )
}
DetailScreen.navigationOptions = () => {
    return {
        headerShown: true,
        headerLeft: null,
        headerTitle: ()=> <Header />
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#fff0fc'
    },
    text1 : {
        fontSize: 25,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: 2
    },
    text2: {
        opacity: 0.6,
        alignSelf: 'flex-start',
        marginLeft: 5
    },
    text3: {
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 5,
    },
    like: {
        alignSelf: 'center',
        marginTop: 5,

    }
})

export default DetailScreen
