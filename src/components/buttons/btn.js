import React, { Component } from 'react'
import { StyleSheet, Button, Alert } from 'react-native'
import styles from '../../styles/styles'

class AppBtn extends Component {
  render() {
    const onButtonPress = () => {
      Alert.alert('Button has been pressed!')
    }

    const { name } = this.props

    return(
      <Button style={styles.button} color='skyblue' title={name} onPress={onButtonPress} />
    )
  }
}

module.exports = AppBtn
