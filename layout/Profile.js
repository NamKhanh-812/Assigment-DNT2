import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={{ height: '100%' }}>
            <View style={{ marginHorizontal: 20, marginVertical: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>PROFILE</Text>
            </View>
            <View style={{ flexDirection: 'row', margin: 20 }}>
                <Image source={{ uri: 'https://i.pinimg.com/564x/21/1a/af/211aaf7093e7f2d61d4683677fa2a688.jpg' }} style={{ borderRadius: 50, width: 70, height: 70 }} />
                <View style={{marginLeft:15, flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:16,marginBottom:5}}>Sằm Nam Khánh</Text>
                    <Text style={{color:'#7F7F7F'}}>khanhsnph43678@fpt.edu.vn</Text>
                </View>
            </View>
        <View style={{borderBottomWidth:1,borderColor:'#ABABAB',marginHorizontal:20,marginTop:20}}>
            <Text style={{color:'#7F7F7F',fontSize:16,marginBottom:10}}>Chung</Text>
        </View>
        <View style={{marginHorizontal:20,gap:15,marginTop:15}}>
            <TouchableOpacity>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Chỉnh sửa thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Cẩm nang trồng cây</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Lịch sử giao dịch</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Q & A</Text>
            </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:1,borderColor:'#ABABAB',marginHorizontal:20,marginTop:20}}>
            <Text style={{color:'#7F7F7F',fontSize:16,marginBottom:10}}>Bảo mật và điểu khoản</Text>
        </View>
        <View style={{marginHorizontal:20,gap:15,marginTop:15}}>
            <TouchableOpacity>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Điều khoản và điều kiện</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Chính sách quyền riêng tư</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:16,fontWeight:'bold',color:'#FF0000'}}>Đăng xuất</Text>
            </TouchableOpacity>
            
        </View>
            
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})