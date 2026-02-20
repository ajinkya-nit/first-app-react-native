import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [user, setUser] = useState('');
  return (
    <View>
      <Text className="font-bold text-blue-800">See How this text changes dynamically</Text>
      <TextInput placeholder="Enter you Name" onChangeText={(val) => setUser(val)}  />
        <Text>{user}</Text>
    </View>
  )
}

export default InputText