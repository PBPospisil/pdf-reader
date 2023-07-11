import React from 'react'
import { LibraryContainer } from '../components/container/LibraryContainer'
import { Header } from '../components/Header'
import { View } from 'react-native'
import { LibraryStyles } from '../ui/styles'

const LibraryScreen = () => {
    return (
        <View style={LibraryStyles.container}>
            <Header title='Library'></Header>
            <LibraryContainer></LibraryContainer>
        </View>
        
    );
}

export default LibraryScreen;