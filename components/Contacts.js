import { Button, SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { gStyle } from '../styles/style'

const Contacts = ({ navigation }) => {
    const loadScene = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={gStyle.main}>
            <Text style={gStyle.title}>Contacts</Text>
            <Button title='Open Main page' onPress={loadScene} />
        </SafeAreaView>
    )
}

export default Contacts

const styles = StyleSheet.create({})