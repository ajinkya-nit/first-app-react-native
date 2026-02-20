import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child.jsx'

const Props = () => {
    const [counter,setCounter] = useState(0)
  return (
    <View>
      <Text>This is a counter using props</Text>
      <Button title="Press this button to increase counter" onPress={() => setCounter(counter+1)} />
      <Child data={counter}/>
    </View>
  )
}

export default Props    