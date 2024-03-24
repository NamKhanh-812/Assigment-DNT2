import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
export const URL = "http://192.168.1.101:3000";

const TrangChu = () => {
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
        <SafeAreaView style={{ height: "100%" }}>
            <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
                <View style={{ height:300 }}>
                    <ImageBackground
                        style={{ height: "100%" }}
                        source={require("../assets/img/pexels-photo-2778192.jpeg")}
                    >
                        <View style={{ flexDirection: "row", margin: 30 }}>
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: "bold",
                                    color: "rgba(34, 31, 31, 1)",
                                    flex: 1,
                                }}
                            >
                                Planta - toả sáng{"\n"}không gian nhà bạn
                            </Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "white",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 15,
                                    borderRadius: 50,
                                }}
                            >
                                <Image source={require("../assets/img/shopping-cart.png")} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ marginLeft: 30 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ color: "rgba(0, 117, 55, 1)" }}>
                                    Xem hàng mới về
                                </Text>
                                <Image source={require("../assets/img/fi_arrow-right.png")} />
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>


                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ margin: 10, fontSize: 24 }}>Cây trồng</Text>
                    <FlatList
                        style={{ width: '100%' }}
                        numColumns={2}
                        scrollEnabled={false}
                        data={listPlants.filter((item, index) => index < 4)}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ margin: 10, width: '45%', padding: 5, gap: 5 }} >
                                <Image
                                    style={{ width: '100%', height: 100, borderRadius:8 }}
                                    source={{ uri: item.image }}
                                />
                                <Text>{item.ten}</Text>
                                {item.uaThich ? <Text style={{color:'gray'}}>Ưa bóng</Text> : <Text  style={{color:'gray'}}>Ưa râm</Text>}
                                <Text  style={{color:'rgba(0, 117, 55, 1)'}}>{item.gia}đ</Text>
                            </TouchableOpacity>
                        }
                    />
                    <TouchableOpacity style={{alignItems:'center',alignSelf:'flex-end',marginRight:10}}>
                    <Text style={{textDecorationLine:'underline'}}>Xem thêm cây trồng</Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft:10,marginVertical:10,fontSize:24}}>Chậu cây</Text>
                    <FlatList
                        style={{ width: '100%' }}
                        numColumns={2}
                        scrollEnabled={false}
                        data={listPlants.filter((item, index) => index < 4)}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={{ margin: 10, width: '45%', padding: 5, gap: 5 }} >
                                <Image
                                    style={{ width: '100%', height: 100 ,borderRadius:8}}
                                    source={{ uri: item.image }}
                                />
                                <Text>{item.ten}</Text>
                                {item.uaThich ? <Text  style={{color:'gray'}}>Ưa bóng</Text> : <Text  style={{color:'gray'}}>Ưa râm</Text>}
                                <Text style={{color:'rgba(0, 117, 55, 1)'}}>{item.gia}đ</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default TrangChu;

const styles = StyleSheet.create({});
