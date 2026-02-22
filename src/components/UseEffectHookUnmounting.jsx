import { View, Text } from 'react-native'
import { Button } from 'react-native'
import React, { useState } from 'react'
import ShowChild from './ShowChild'

const UseEffectHookUnmounting = () => {
    const [showChild, setShowChild] = useState(false)
  return (
    <View>
      <Text>UseEffectHookUnmounting</Text>
      <Button title='Toggle the child' onPress={() => {
          showChild ? setShowChild(false): setShowChild(true)
        }} />
        {
          showChild ? <ShowChild/> : null 
        } 
    </View>
  )
}

export default UseEffectHookUnmounting