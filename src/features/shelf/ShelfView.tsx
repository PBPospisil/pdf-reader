import React from 'react'
import { Book } from '../../types'
import { View, FlatList } from "react-native"
import { useBooks } from '../../hooks/hooks'
import { BookView } from '../book/BookView'
import AddBookButton from '../../components/AddBookButton'
import { ShelfStyles } from '../../ui/styles'

interface itemProps {
    item: Book
}

const renderItem = ({ item }: itemProps) => {
    return (
        <BookView book={{
            title: item.title,
            cover: item.cover,
            author: item.author,
            publicationDate: item.publicationDate,
            path: item.path,
            fileType: item.fileType,
            size: item.size
        }}
        />
    )
}

const ShelfView = () => {
    const books = useBooks()

    return (
        <View style={ShelfStyles.container}>
            <View style={ShelfStyles.list}>
                <FlatList
                    data={books}
                    renderItem={renderItem}
                />
            </View>
            <AddBookButton></AddBookButton>
        </View>
    )
}

export default ShelfView;