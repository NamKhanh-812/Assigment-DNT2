import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { URL } from './TrangChu';

const DanhMucSanPham = () => {
    const [listPlants, setListplants] = useState([]);

    const getListPlants = async () => {
        try {
            await fetch(`${URL}/plants`)
                .then((res) => res.json())
                .then((data) => setListplants(data));
        } catch (error) {
            console.log(error);
            return <Text>Lỗi</Text>;
        }
    };
    useEffect(() => {
        getListPlants();
    }, []);
    return (
        <View style={{ height: '100%' }}>
            <View style={{ marginHorizontal: 20, marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity >
                    <Image source={require('../assets/img/chevron-left.png')} />
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>CÂY TRỒNG</Text>
                <TouchableOpacity >
                    <Image source={require('../assets/img/shopping-cart.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', gap: 5, margin: 20 }}>
                <Text style={{ padding: 10, borderRadius:10, backgroundColor: 'green', color: 'white' }}>Tất cả</Text>
                <Text style={{ padding: 10 }}>Hàng mới về </Text>
                <Text style={{ padding: 10 }}>Ưa sáng</Text>
                <Text style={{ padding: 10 }}>Ưa bóng</Text>
            </View>
            <FlatList
                style={{ width: '100%' }}
                numColumns={2}
                scrollEnabled={false}
                data={listPlants}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{ margin: 10, width: '45%', padding: 5, gap: 5 }} >
                        <Image
                            style={{ width: '100%', height: 100, borderRadius: 8 }}
                            source={{ uri: item.image }}
                        />
                        <Text>{item.ten}</Text>
                        {item.uaThich ? <Text style={{ color: 'gray' }}>Ưa bóng</Text> : <Text style={{ color: 'gray' }}>Ưa râm</Text>}
                        <Text style={{ color: 'rgba(0, 117, 55, 1)' }}>{item.gia}đ</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

export default DanhMucSanPham

const styles = StyleSheet.create({})