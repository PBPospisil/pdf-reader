import React from 'react'
import { Pressable, PressableStateCallbackType, Text, View } from 'react-native'
import { Book, RootStackParamList } from '../../types'
import { ShelfStyles } from '../../ui/styles'
import { useNavigation } from '@react-navigation/native'

interface BookProps {
    book: Book
}

export const BookView = (props: BookProps) =>
{
    const navigation: any = useNavigation<RootStackParamList>()

    return (
        <Pressable
            onPress={() => navigation.navigate("Reader")}
            style={(state: PressableStateCallbackType) => state.pressed ? ShelfStyles.bookViewOnPress : ShelfStyles.bookViewDefault}>
            <Text>{props.book.title}</Text>
        </Pressable>
    )
}