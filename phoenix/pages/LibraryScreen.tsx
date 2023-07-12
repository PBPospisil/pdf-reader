import React from 'react'
import { Header } from '../components/Header'
import { View } from 'react-native'
import { LibraryStyles } from '../ui/styles'

const LibraryScreen = () => {
    return (
        <View style={LibraryStyles.container}>
            <Header title='Library'></Header>
        </View>
        
    );
}

export default LibraryScreen;