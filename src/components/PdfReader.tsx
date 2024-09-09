import React from "react"
import { ToastAndroid, View } from "react-native" 
import { PdfStyles } from "../ui/styles"
import Pdf from 'react-native-pdf'
import { Book } from "../types"

type PdfReaderProps = {
    book: Book,
}

const errorToast = () => {
    ToastAndroid.showWithGravity('An error occurred.',
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM);
}

const PdfReader = (props: PdfReaderProps) =>
{
    const source = { uri: props.book.path }

    return (
        <View style={PdfStyles.container}>
            <Pdf
                style={PdfStyles.pdf}
                source={source}
                onError={() => { errorToast() }}/>
        </View>
    )
}

export default PdfReader