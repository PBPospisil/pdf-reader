import React from 'react'
import { Header } from '../components/Header'
import { View } from 'react-native'
import { LibraryStyles } from '../ui/styles'
import ShelfView from '../features/shelf/ShelfView'
import { Body } from '../components/Body'

const LibraryScreen = () => {
    return (
        <View style={LibraryStyles.container}>
            <Header title='Library'></Header>
            <Body 
                style={LibraryStyles.body}
                RenderItem={ShelfView}
            />
        </View>
        
    );
}

export default LibraryScreen;