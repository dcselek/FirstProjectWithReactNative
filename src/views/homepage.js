import React from 'react';
import {View,Text} from 'react-native';
import MainButton from '../components/buttons/button'

function Homepage({props,navigation}) {
    return (
        <View style={{alignItems:'center', justifyContent: 'center' , flex:1, backgroundColor:'#822e5f'}}>
            <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>Ana Sayfaya Hoş Geldin</Text>
            <Text style={{color: 'white', marginTop:10, marginBottom:10 }}>Giriş yapmak için aşağıdaki butona bas.</Text>
            <MainButton text='giriş' onPress={()=> navigation.navigate('Action')} />
        </View>
    );
}

export default Homepage;