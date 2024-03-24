import { Image, Pressable, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const DangNhap = () => {

    const [vienInput, setvienInput] = useState(false)
    const [viewPass, setViewPass] = useState(false)


    return (
        <View style={{ height: '100%' }}>
            <StatusBar backgroundColor={'transparent'} translucent />
            <Image source={require('../assets/img/Ellipse 1.png')} />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>Chào mừng bạn</Text>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>Đăng nhập tài khoản</Text>
            <TextInput placeholder='Nhập email hoặc số điện thoại' style={{ borderWidth: 1, padding: 10, borderRadius: 10, borderColor: '#8B8B8B', marginTop: 10, marginHorizontal: 30 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 10, borderRadius: 10, borderColor: '#8B8B8B', marginTop: 10, marginHorizontal: 30 }}>
                <TextInput
                    placeholder='Mật khẩu'
                    style={{ width: '90%' }}
                    secureTextEntry={viewPass ? false : true} />
                <TouchableOpacity onPress={() => setViewPass(!viewPass)}>
                    {viewPass ? (
                        <Image
                            source={require('../assets/img/ant-design_eye-filled.png')}
                        />
                    ) : (
                        <Image
                            source={require('../assets/img/ant-design_eye-invisible-filled.png')}
                            style={styles.eyeImage}
                        />
                    )}
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <BouncyCheckbox
                size={25}
                fillColor="green"
                unfillColor="#FFFFFF"
                text=''
                iconStyle={{ marginLeft: 30 }}
            />
                <Text style={{ color: '#949090', flex: 1 }}>Nhớ tài khoản</Text>
                <TouchableOpacity style={{ marginRight: 30 }}><Text style={{ color: '#007537' }}>Quên mật khẩu?</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={{backgroundColor:'rgba(76, 175, 80, 1)',borderRadius:15,marginHorizontal:30,padding:15,alignItems:'center',marginVertical:10}}>
               
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Đăng nhập</Text>
                
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
                <Text>Bạn không có tài khoản </Text>
                <TouchableOpacity >
                    <Text style={{color:'rgba(0, 146, 69, 1)'}}>Tạo tài khoản</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DangNhap

const styles = StyleSheet.create({})