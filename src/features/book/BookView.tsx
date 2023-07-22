import React from 'react'
import { Pressable, PressableStateCallbackType, Text, View } from 'react-native'
import { Book } from '../../types'
import { ShelfStyles } from '../../ui/styles'

interface BookProps {
    book: Book
}

export const BookView = (props: BookProps) =>
{
    return (
        <Pressable
            onPress={() => {console.log("BOOKVIEW WAS PRESSED")}}
            style={(state: PressableStateCallbackType) => state.pressed ? ShelfStyles.bookViewOnPress : ShelfStyles.bookViewDefault}>
            <Text>{props.book.title}</Text>
        </Pressable>
    )
}