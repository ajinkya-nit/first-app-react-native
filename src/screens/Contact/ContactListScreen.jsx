import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
import ContactItem from '../../components/ContactItem'

const ContactListScreen = () => {
    const renderItem = ({item}) => <ContactItem name= {item.name} email={item.email}/>
  return (
    <FlatList
        data= { user }
        renderItem={renderItem}
        keyExtractor={item.id}
    />
  )
}

export default ContactListScreen