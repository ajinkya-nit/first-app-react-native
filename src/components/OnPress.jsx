import { Text, View,Button } from 'react-native'

const OnPress = () => {
    const getName = () =>{
        console.log("My name is ajinkya!");
    }

    return (
      <View>
        <Text className="text-blue-900 font-bold"> This is button component </Text>
        <Button title='Press this button' onPress={getName}/> 
      </View>
    )
}

export default OnPress
