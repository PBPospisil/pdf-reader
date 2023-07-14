import React, { useState } from 'react'
import { View } from 'react-native'

export type Book = {
    title: string;
    cover?: string;
    author?: string;
    publicationDate?: Date;
}

interface BookProps {
    book: Book
}

export const BookView = (props: BookProps) =>
{
    const [book] = useState(props.book)

    return (
        <View></View>
    )
}