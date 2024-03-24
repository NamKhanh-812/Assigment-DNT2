import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ThongBao = () => {
  return (
    <View style={{height:'100%'}}>
      <View style={{marginTop:30}}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>THÔNG BÁO</Text>
      </View>
      <Text style={{marginTop:30,alignSelf:'center',fontWeight:'bold'}}>Hiện chưa có thông báo nào cho bạn</Text>
    </View>
  )
}

export default ThongBao

const styles = StyleSheet.create({})