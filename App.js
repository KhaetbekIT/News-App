// import { Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
// import { gStyle } from './styles/style'
import * as Font from "expo-font"
import AppLoading from 'expo-app-loading'
// import Main from './components/Main'
import MainStack from "./navigation";

const fonts = () => {
  return Font.loadAsync({
    'mt-black': require("./fonts/Montserrat-Black.ttf"),
    'mt-bold': require("./fonts/Montserrat-Bold.ttf"),
    'mt-extrabold': require("./fonts/Montserrat-ExtraBold.ttf"),
    'mt-extralight': require("./fonts/Montserrat-ExtraLight.ttf"),
    'mt-light': require("./fonts/Montserrat-Light.ttf"),
    'mt-medium': require("./fonts/Montserrat-Medium.ttf"),
    'mt-normal': require("./fonts/Montserrat-Regular.ttf"),
    'mt-semibold': require("./fonts/Montserrat-SemiBold.ttf"),
    'mt-thin': require("./fonts/Montserrat-Thin.ttf"),
  })
}

const App = () => {
  const [Font, setFont] = useState(false);

  if (Font) {
    return (
      <MainStack />
    )
  }

  return <AppLoading startAsync={fonts} onError={error => console.error(error)} onFinish={() => setFont(true)} />

}

export default App