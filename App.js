import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './src/navigator/StackNavigator'
import { Provider } from 'react-redux'
import MyStore from './src/screens/reduxToolkit/MyStore'

const App = () => {
  return (
    <Provider store={MyStore}>
      <StackNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})