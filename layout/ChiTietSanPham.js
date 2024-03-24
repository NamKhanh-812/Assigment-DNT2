import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ChiTietSanPham = () => {
    return (
        <View style={{ height: '100%' }}>
            <View style={{ marginHorizontal: 20, marginVertical: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity >
                    <Image source={require('../assets/img/chevron-left.png')} />
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>Bonsai 1</Text>
                <TouchableOpacity >
                    <Image source={require('../assets/img/shopping-cart.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={{ width: '100%', height: 300 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Trident_Maple_bonsai_52%2C_October_10%2C_2008.jpg/1024px-Trident_Maple_bonsai_52%2C_October_10%2C_2008.jpg' }} />
                <View style={{ flexDirection: 'row', marginVertical: 15, marginLeft: 20, gap: 10 }}>
                    <Text style={{ padding: 10, borderRadius: 5, backgroundColor: 'green', color: 'white' }}>Cây trồng</Text>
                    <Text style={{ padding: 10, borderRadius: 5, backgroundColor: 'green', color: 'white' }}>Ưa bóng</Text>
                </View>
                <Text style={{ fontSize: 24, marginVertical: 10, marginLeft: 20, color: 'rgba(0, 117, 55, 1)' }}>2000000đ</Text>
                <View style={{ gap: 20 }}>
                    <View style={{ borderBottomWidth: 2, borderColor: 'rgba(171, 171, 171, 1)', marginHorizontal: 20 }} >
                        <Text style={{ fontSize: 16 }}>Chi tiết sản phẩm </Text>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderColor: 'rgba(171, 171, 171, 1)', marginHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row' }} >
                        <Text style={{ fontSize: 16 }}>Kích cỡ</Text>
                        <Text style={{ fontSize: 16 }}>Nhỏ</Text>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderColor: 'rgba(171, 171, 171, 1)', marginHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row' }} >
                        <Text style={{ fontSize: 16 }}>Xuất xứ</Text>
                        <Text style={{ fontSize: 16 }}>Nhật bản</Text>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderColor: 'rgba(171, 171, 171, 1)', marginHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row' }} >
                        <Text style={{ fontSize: 16 }}>Tình trạng</Text>
                        <Text style={{ fontSize: 16, color: 'rgba(0, 117, 55, 1)' }}>Còn 156 sp</Text>
                    </View>


                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:20 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{color:'rgba(171, 171, 171, 1)'}} >Đã chọn 0 sản phẩm</Text>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                        <TouchableOpacity style={{ padding: 5, width: 30, height: 30, borderWidth: 1, borderRadius: 2 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/img/subtract.png')} />
                        </TouchableOpacity>
                        <Text style={{fontSize:24}}>0</Text>
                        <TouchableOpacity style={{ padding: 5, width: 30, height: 30, borderWidth: 1, borderRadius: 2 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require('../assets/img/add.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'column',alignItems:'flex-end' }}>
                    <Text style={{color:'rgba(171, 171, 171, 1)'}}>Tạm tính</Text>
                    <Text style={{fontSize:24}}>0đ</Text>
                    
                </View>


            </View>
            <TouchableOpacity style={{marginHorizontal:20,backgroundColor:'#ABABAB',padding:10,borderRadius:8,height:50,justifyContent:'center',alignItems:'center'}}>
                <Text>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChiTietSanPham

const styles = StyleSheet.create({})