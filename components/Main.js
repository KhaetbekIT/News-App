import { StyleSheet, Text, FlatList, TouchableOpacity, Image, View, SafeAreaView, Modal } from 'react-native'
import React, { useState } from 'react'
import { gStyle } from '../styles/style'
import { Ionicons } from '@expo/vector-icons'
import Form from './Form'

const NewsArray = [
    { name: "Google", anons: "Google!!!", full: "Google is cool!", key: 1, image: "https://www.cbc.ca/kidsnews/images/GOOGLE25THTHUMB2.png" },
    { name: "Apple", anons: "Apple!!!", full: "Apple is cool!", key: 2, image: "https://e3.365dm.com/23/04/2048x1152/skynews-mumbai-india-apple_6112534.jpg" },
    { name: "Facebook", anons: "Facebook!!!", full: "Facebook is cool!", key: 3, image: "https://c8.alamy.com/comp/2C8XHFC/facebook-company-logo-2C8XHFC.jpg" }
]

const Main = ({ navigation }) => {
    // const loadScene = () => {
    //     navigation.navigate('Contacts')
    // }

    const [News, setNews] = useState(NewsArray);
    const [IsOpen, setIsOpen] = useState(false);

    const handleModal = () => setIsOpen(prev => !prev);
    const onAddItem = item => {
        setNews(prev => [
            { ...item, key: Math.random().toString() },
            ...prev
        ]);
        setIsOpen(false)
    }

    return (
        <SafeAreaView style={gStyle.main}>
            <Modal visible={IsOpen}>
                <View style={[{ padding: 20 }, gStyle.main]}>

                    <Ionicons onPress={handleModal} name='close-circle' color={"red"} style={styles.add} size={34} />

                    <Form addItem={onAddItem} />
                </View>
            </Modal>

            <Ionicons onPress={handleModal} name='add-circle' color={"green"} style={styles.add} size={34} />
            <Text style={[gStyle.title, styles.header]}>Main</Text>

            <FlatList
                contentContainerStyle={{ paddingHorizontal: 20 }}
                data={News}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                        <Image style={{
                            borderRadius: 20,
                            height: 200
                        }} source={{
                            uri: item.image
                        }} />

                        <View style={{ paddingVertical: 20 }}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.anons}>{item.anons}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default Main

const styles = StyleSheet.create({
    item: {
        marginBottom: 30
    },
    header: {
        marginBottom: 30
    },
    title: {
        fontFamily: "ml-bold",
        fontSize: 22,
        textAlign: "center",
        marginVertical: 10,
        color: "#474747"
    },
    anons: {
        fontFamily: "ml-light",
        fontSize: 16,
        textAlign: "center",
        color: "#474747",
        marginTop: 5,
    },
    add: {
        textAlign: "center",
        padding: 20
    }
})