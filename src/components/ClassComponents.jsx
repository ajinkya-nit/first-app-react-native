import { View, Text,Button } from 'react-native'
import React, { Component } from 'react'
import SecondClass from './SecondClass.jsx'

class ClassComponents extends Component {
    constructor(){
        super();
        this.state = {
            myName : 'Ajinkya'
        }
    }
    updateName = () => {
        this.setState({myName: (this.state.myName=='Ajinkya'?'Arjun':'Ajinkya')})
    }
    render() {
        return (
            <View>
                <Text>
                    Class Components
                </Text>
                <Text>{this.state.myName}</Text>
                <Button title="change name" onPress= {this.updateName}/>
                <SecondClass />
            </View>
        )
    }
}

export default ClassComponents