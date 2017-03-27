import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import styles from '../styles/styles'

class HeaderLogo extends Component {
  render() {
    let logo = { uri: 'http://angular.github.io/react-native-renderer/assets/react.png' }
    return (
      <View style={styles.itemCenter}>
        <Image style={styles.logo} source={logo} />
      </View>
    )
  }
}

module.exports = HeaderLogo
