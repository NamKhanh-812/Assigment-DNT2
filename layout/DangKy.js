import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DangKy = () => {
  return (
    <View>
      <View style={{ height: '100%' }}>
            <StatusBar backgroundColor={'transparent'} translucent />
            <Image source={require('../assets/img/Ellipse 2.png')} />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>Đăng ký</Text>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>Tạo tài khoản</Text>
            <TextInput  placeholder='Họ tên' style={{ borderWidth: 1, padding: 10, borderRadius: 10, borderColor: '#8B8B8B', marginTop: 10, marginHorizontal: 30 }} />
            <TextInput placeholder='Email' style={{ borderWidth: 1, padding: 10, borderRadius: 10, borderColor: '#8B8B8B', marginTop: 10, marginHorizontal: 30 }} />
            <TextInput placeholder='Số điện thoại' style={{ borderWidth: 1, padding: 10, borderRadius: 10, borderColor: '#8B8B8B', marginTop: 10, marginHorizontal: 30 }} />
            <TextInput placeholder='Mật khẩu' style={{ borderWidth: 1, padding: 10, borderRadius: 10, borderColor: '#8B8B8B', marginTop: 10, marginHorizontal: 30 }} />
            
           <Text style={{marginHorizontal:30,marginTop:10,alignItems:'center',textAlign:'center'}}>Để đăng ký tài khoản, bạn đồng ý Terms & Conditions and Privacy Policy</Text>
            <TouchableOpacity style={{backgroundColor:'rgba(76, 175, 80, 1)',borderRadius:15,marginHorizontal:30,padding:15,alignItems:'center',marginVertical:10}}>
               
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Đăng ký</Text>
                
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:15}}>
                <View style={{width:'30%',borderWidth:1,borderColor:'rgba(76, 175, 80, 1)'}}></View>
                <Text style={{marginHorizontal:10}}>Hoặc</Text>
                <View style={{width:'30%',borderWidth:1,borderColor:'rgba(76, 175, 80, 1)'}}></View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity>
                    <Image source={require('../assets/img/flat-color-icons_google.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:30}}>
                    <Image source={require('../assets/img/logos_facebook.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Text>Tôi đã có tài khoản </Text>
                <TouchableOpacity >
                    <Text style={{color:'rgba(0, 146, 69, 1)'}}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default DangKy

const styles = StyleSheet.create({})