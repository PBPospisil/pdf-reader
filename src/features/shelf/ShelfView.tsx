import React from 'react'
import { View, FlatList, Text } from "react-native"
import store from '../../../app/store';

const ShelfView = () => 
{
    const books = store.getState().library.books
    
    return (
        <View>
            <FlatList
                data={[]}
                renderItem={() => <Text></Text>}
            />
        </View>
    )
}

export default ShelfView;