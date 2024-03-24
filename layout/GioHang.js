import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const GioHang = () => {
    return (
        <View style={{ height: '100%' }}>
            <View style={{ marginHorizontal: 20, marginVertical: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity >
                    <Image source={require('../assets/img/chevron-left.png')} />
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>GIỎ HÀNG</Text>
                <TouchableOpacity >
                    <Image source={require('../assets/img/delete.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', height: '10%',width:'100%' }}>
                <BouncyCheckbox
                    size={25}
                    fillColor="green"
                    unfillColor="#FFFFFF"
                    text=''
                    iconStyle={{ marginLeft: 20 }}
                />
                <Image style={{ height: '100%', width: 100, borderRadius: 8 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Trident_Maple_bonsai_52%2C_October_10%2C_2008.jpg/1024px-Trident_Maple_bonsai_52%2C_October_10%2C_2008.jpg' }} />
                <View style={{ flexDirection: 'column', justifyContent: 'space-between',marginLeft:10 }}>
                    <View style={{ flexDirection: 'row',maxWidth:'50%' }}>
                        <Text numberOfLines={1}>Bonsai 1</Text>
                        <Text> | </Text>
                        <Text numberOfLines={1} style={{color:'#7D7B7B'}}>Ưa bóng</Text>
                    </View>
                    <Text style={{color:'#007537'}}>200000đ</Text>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between',width:'70%' }}>
                        <TouchableOpacity style={{ padding: 5, width: 20, height: 20, borderWidth: 1, borderRadius: 2 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/img/subtract.png')} />
                        </TouchableOpacity>
                        <Text style={{fontSize:14}}>0</Text>
                        <TouchableOpacity style={{ padding: 5, width: 20, height: 20, borderWidth: 1, borderRadius: 2 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/img/add.png')} />
                        </TouchableOpacity>
                        <Text style={{textDecorationLine:'underline'}}>Xoá</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default GioHang

const styles = StyleSheet.create({})