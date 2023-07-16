import React, { useState } from 'react'
import { View } from 'react-native'
import { Book } from '../../types'

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