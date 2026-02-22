import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ShowChild = () => {
    useEffect(() => {
        return() => {
            console.log('Child Component Unmounted')
        }
    })
  return (
    <View>
      <Text>child component</Text>
    </View>
  )
}

export default ShowChild