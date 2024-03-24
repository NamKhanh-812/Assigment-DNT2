import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TimKiem = () => {
  return (
    <View style={{height:'100%'}}>
      <View style={{marginTop:30}}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>TÌM KIẾM</Text>
        
      </View>
      <View style={{margin:20,borderBottomWidth: 1,flexDirection: 'row',padding:5}}>
        <TextInput 
          placeholder='Tìm kiếm' style={{flex: 1 }} />
        <TouchableOpacity >
          <Image source={require('../assets/img/search.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={{marginLeft:20,fontWeight:'bold'}}>Tìm kiếm gần đây</Text>
    </View>
  )
}

export default TimKiem

const styles = StyleSheet.create({})