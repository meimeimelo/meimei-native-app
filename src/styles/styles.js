import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
  },
  title: {
    backgroundColor: 'skyblue',
    color: '#fff',
    padding: 20,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  itemCenter: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  inputText: {
    height: 40,
    margin: 20,
    padding: 5,
    color: 'skyblue',
    borderColor: 'skyblue',
    borderStyle: 'solid',
  },
  textResult: {
    margin: 20,
    fontSize: 16,
    color: 'skyblue',
  },
  button: {
    backgroundColor: 'skyblue',
    color: 'white',
    fontSize: 20,
  }
})

module.exports = styles
