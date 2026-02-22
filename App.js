import { StyleSheet,View, Text,Button } from 'react-native'
import "./global.css"
import OnPress from './src/components/OnPress.jsx'
import Props from './src/components/Props.jsx'
import { useState } from 'react'
import InputText from './src/components/InputText.jsx'
import FlatListScreen from './src/components/FlatListScreen.jsx'
import Grid from './src/components/Grid.jsx'
import ClassComponents from './src/components/ClassComponents.jsx'
import UseEffectHook from './src/components/UseEffectHook.jsx'
import UseEffectHookUnmounting from './src/components/UseEffectHookUnmounting.jsx'


const App = () => {
    const [chgname, setChgName] = useState("Ajinkya")
  return (
    <View className='flex-1 justify-start items-center'>
      <Text className="p-20">This is Ajinkya</Text>
      {/* <AgeCheck/>
      <Grid/> */}
      <UseEffectHookUnmounting/>
    </View>
  )
}

export default App

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
// import "./global.css"

// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-xl font-bold text-blue-500">
//         Welcome to Jadhav!
//       </Text>
//       <Text className="font-bold flex text-red-800 hover:text-blue-400">
//         This is my first react native App
//       </Text>
//       <Pressable onPress={() => Alert.alert('Pressed')} accessibilityRole="button">
//         <Text className="text-blue font-extrabold pressed:text-red-500">
//           Touch Me
//         </Text>
//       </Pressable>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});