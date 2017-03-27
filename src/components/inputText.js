import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from '../styles/styles'
import AppBtn from './buttons/btn'

class InputText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Your text appear here'
    }
  }

  render() {
    return(
      <View>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          placeholder={'Enter your text here'}
        />
        <AppBtn name={'click'}/>
        <Text style={styles.textResult}>{this.state.text}</Text>
      </View>
    )
  }
}

module.exports = InputText
