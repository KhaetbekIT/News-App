import { Image, StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { gStyle } from '../styles/style'

const FullInfo = ({ route }) => {
  return (
    <SafeAreaView style={styles.view}>
      <Image style={{
        minWidth: 200
      }} source={{
        width: "100%",
        height: 200,
        uri: route.params.image
      }} />

      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </SafeAreaView>
  )
}

export default FullInfo

const styles = StyleSheet.create({
  view: {
    padding: 20
  },
  full: {
    fontFamily: "ml-light",
    fontSize: 16,
    textAlign: "justify",
    color: "#474747",
    marginTop: 5,
  }
})