import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import styles from '../styles/styles'

class TextField extends Component {
  render() {
    return(
      <Text style={[styles.title, styles.itemCenter]}> Meimei's First React Native</Text>
    )
  }
}

module.exports = TextField
