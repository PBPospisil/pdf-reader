import React from 'react'
import { Image, Pressable, PressableStateCallbackType, Text, View } from 'react-native'
import { Book, RootStackParamList } from '../../types'
import { ShelfStyles } from '../../ui/styles'
import { useNavigation } from '@react-navigation/native'

interface BookProps {
    book: Book
}

export const BookView = (props: BookProps) =>
{
    const navigation: any = useNavigation<RootStackParamList>()

    const PressableStateStyle = (state: PressableStateCallbackType) =>
    {
        return state.pressed ? ShelfStyles.bookViewOnPress : ShelfStyles.bookViewDefault
    }

    return (
        <Pressable
            onPress={() => navigation.navigate("Reader", { book: props.book })}
            style={(state: PressableStateCallbackType) => PressableStateStyle(state)}>
            <Text style={ShelfStyles.bookTitleText}>{props.book.title}</Text>
            <Text style={ShelfStyles.bookSizeText}></Text>
        </Pressable>
    )
}