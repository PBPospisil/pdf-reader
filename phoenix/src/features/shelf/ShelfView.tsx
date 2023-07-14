import React, { useState } from 'react'
import { Book } from '../book/BookView';
import { View, FlatList, Text } from "react-native"

type Shelf = {
    name?: string;
    books?: Array<Book>;
}

interface ShelfProps {
    shelf?: Shelf;
}

const addBookAction = (book: Book) => {
    type: 'shelf/add-book'
    payload: book
}

const addBook = (book: Book) => {
    return {
        type: 'shelf/add-book',
        payload: book
    }
}

const ShelfView = (props: ShelfProps) => 
{
    const [books, setBooks] = useState(props.shelf)

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