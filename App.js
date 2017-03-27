import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styles from './src/styles/styles'
import HeaderLogo from './src/components/headerLogo'
import TextField from './src/components/textField'
import InputText from './src/components/inputText'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderLogo />
        <TextField />
        <InputText />
      </View>
    )
  }
}

export default App
