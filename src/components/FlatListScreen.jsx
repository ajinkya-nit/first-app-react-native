import { View, Text, FlatList } from 'react-native'
import React from 'react'

const data = [
    {id:1, name:'Ajinkya'},
    {id:2, name:'Satyarth'},
    {id:3, name:'Raj'},
    {id:4, name:'Satyarth'},
    {id:5, name:'Ajinkya'},
    {id:6, name:'Ashok'},
    {id:7, name:'Satyarth'},
    {id:8, name:'Ajinkya'}
]

const FlatListScreen = () => {

    const renderItem = ({item}) => (
        <View>
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default FlatListScreen