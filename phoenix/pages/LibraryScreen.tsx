import React from 'react'
import { LibraryContainer } from '../components/container/LibraryContainer'
import { LibraryHeader } from '../components/LibraryHeader'
import { View } from 'react-native'
import { LibraryStyles } from '../ui/styles'

const LibraryScreen = () => {
    return (
        <View>
            <LibraryHeader></LibraryHeader>
            <LibraryContainer></LibraryContainer>
        </View>
        
    );
}

export default LibraryScreen;