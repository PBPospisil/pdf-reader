import React from 'react'
import { Text, View } from 'react-native'
import { Book } from '../../types'

interface BookProps {
    book: Book
}

export const BookView = (props: BookProps) =>
{
    return (
        <View>
            <Text>{props.book.title}</Text>
        </View>
    )
}