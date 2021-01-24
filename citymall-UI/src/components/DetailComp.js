import React,{useEffect, useState} from 'react'
import Spinner from './Spinner'
import Api from '../api/api'
import {Text, View, FlatList,StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {Button, Image} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const DetailComp = ({title, navigation}) => {
    const [movies, setMovies] = useState(null)
    const [page, setPage] = useState(1)
    // const nextpage = () => {
    //     if(page<=1000){
    //         setPage(page+1)
    //     }
        
    // }
    // const previouspage = () => {
       
    //     if(page>1){
            
    //         setPage(page-1)
    //     }
        
    // }
    const movie = async() => {
        try{
            const result = await Api.get('/discover/movie', {
                params : {
                    api_key: 'd742a8435e73fb5357c1d27b10dba32b',
                    sort_by:'popularity.desc',
                    page: page
                }
            })
            setMovies(result.data.results)
            
        }catch(err) {
            console.log(err.message)
        }
        
    }

    useEffect(()=> {
        <Spinner />
        movie()
    },[])
    if(!movies){
        console.log('running')
        return <Spinner title="Popular movies" />
    }
    return (
        
        <View>
            
            <Text style={styles.text} >{title}</Text>
            <View style={styles.container}>  

            <ScrollView>
            {/* {!movies? <View><Spinner /></View>: null } */}
            {/* {movies? null : <Spinner />} */}
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            data={movies}
            keyExtractor = {(result)=> {result.id}}
            renderItem= {({item})=> {
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate('Detail',{item: item})}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                            style={{ width: 150, height: 200, marginLeft: 10 }}
                        />
                    <Text style={styles.opa}>{item.original_title}</Text>
                    </TouchableOpacity>
                )
            }}
            />
        
           {/* <View style={styles.button}>
            {page>1? <Button 
            icon={
                <Icon
             name="arrow-left"
             size={25}
             color="rgb(93, 213, 217)"
           />
            }
             
            onPress= {previouspage}
            type='outline'
            />: null}
            
            <Button 
             icon={
                <Icon
             name="arrow-right"
             size={25}
             color="rgb(93, 213, 217)"
           />
            }
            onPress= {nextpage}
            type='outline'
            /> */}
            
            {/* </View> */}
            </ScrollView>
            </View>

            </View>
    )
}

styles = StyleSheet.create({
    
    but: {
        width: '25%'
    },
    button : {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    container: {
        marginLeft: 15,
        padding: 5,
        // backgroundColor: '#F0F8FF',
        borderRadius: 10,
    },
    opa: {
        width: 150,
        marginLeft: 10
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 5
    }
  
})

export default DetailComp