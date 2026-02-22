import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        console.log('email', email)
        console.log('Password', password)

        setEmail('')
        setPassword('')
    }
  return (
    <View>
      <Text>LoginForm</Text>
      <Text>Login</Text>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
        />
        <TextInput
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#999"
            secureTextEntry
        />
        <TouchableOpacity onPress={handleLogin}>
            <Text>Login</Text>
            <Text>Sign Up</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoginForm