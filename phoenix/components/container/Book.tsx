import React from 'react'
import { View } from 'react-native'

interface BookProps {
    title: string;
    cover?: string;
    author?: string;
    publicationDate: Date;
}

export const BookContainer = (props: BookProps) => {}