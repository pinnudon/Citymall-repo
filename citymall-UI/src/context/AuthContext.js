import { AsyncStorage } from 'react-native'
import Api from '../api/nodeapi'
import {navigate} from '../navigationRef'
import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return ({...state, errorMessage: action.payload})
        case 'signup':
            return ({errorMessage: '', token: action.payload})
        case 'clear_Error':
            return ({...state, errorMesage: ''})
        case 'signout':
            return ({token: null, errorMessage: ''})
        default:
            return state
    }
}
const localSignup = (dispatch)=> {
    return async ()=> {
        const token = await AsyncStorage.getItem('token')
        if(token){
            dispatch({type: 'signup', payload: token})
            navigate('Home')
        } else{
            navigate('Signup')
        }
    }
}
const clearErrorMsg = (dispatch) => {
    return ()=> {
        dispatch({type:'clear_Error'})
    }
}

const signup = (dispatch) => {
    return async ({email, password})=> {
        try{
            const res = await Api.post('/signup', {email, password})
            await AsyncStorage.setItem('token', res.data.token)
            dispatch ({type: 'signup', payload: res.data.token})
            navigate('Home')
        }catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
        }
    }
}

const signin = (dispatch) => {
    return async ({email, password})=> {
        try{
            const res = await Api.post('/signin', {email, password})
            await AsyncStorage.setItem('token',res.data.token)
            dispatch({type: 'signup',payload: res.data.token})
            navigate('Home')
        }catch(err){
            dispatch({type:'add_error', payload: 'Something went wrong on Sign in' })
        }
    }
}
const signout = (dispatch) => {
    return async ()=> {
        const token = await AsyncStorage.removeItem('token') 
        dispatch({type: 'signout'})
        navigate('loginFlow')
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMsg, localSignup, signout},
    {token: null, errorMessage: ''}
) 