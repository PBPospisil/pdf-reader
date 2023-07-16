import React, { useState } from 'react'
import { Book } from '../../types';
import { View, FlatList, Text } from "react-native"
import { useBooks } from '../../hooks/hooks';
import { BookView } from '../book/BookView';

const ShelfView = () => 
{
    const books: Book[] = useBooks()
    
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