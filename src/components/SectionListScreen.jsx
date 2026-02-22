import { View, Text, SectionList } from 'react-native'
import React from 'react'

const listItems = [
    {
        title: 'Frontend Team',
        data: [
        { id: '1', name: 'Ajinkya' },
        { id: '2', name: 'Sneha' },
        ],
    },
    {
        title: 'Backend Team',
        data: [
        { id: '3', name: 'Satyarth' },
        { id: '4', name: 'Raj' },
        ],
    },
];
 
const SectionListScreen = () => {
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  )

  const renderSectionHeader = ({ section }) => (
    <View>
      <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
    </View>
  )
  return (
    <View>
      <SectionList
        sections={listItems}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default SectionListScreen