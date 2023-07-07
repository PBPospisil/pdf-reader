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

export const BookContainer = (props: BookProps) => {
    const [book] = useState(props.book)
}