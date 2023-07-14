import React from 'react'
import { Header } from '../components/Header'
import { View } from 'react-native'
import { LibraryStyles } from '../ui/styles'
import ShelfView from '../features/shelf/ShelfView'
import AddBookButton from '../components/AddBookButton'

const LibraryScreen = () => {
    return (
        <View style={LibraryStyles.container}>
            <Header title='Library'></Header>
            <AddBookButton></AddBookButton>
            <ShelfView></ShelfView>
        </View>
        
    );
}

export default LibraryScreen;