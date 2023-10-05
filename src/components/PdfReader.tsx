import React, { useState } from "react"
import { View } from "react-native" 
import { PdfStyles } from "../ui/styles"
import Pdf from 'react-native-pdf'
import { Book } from "../types"

var RNFS = require('react-native-fs');

type PdfReaderProps = {
    book: Book,
}

const PdfReader = (props: PdfReaderProps) =>
{
    const source = { uri: props.book.path }

    return (
        <View style={PdfStyles.container}>
            <Pdf
                style={PdfStyles.pdf}
                source={source}
                onLoadComplete={(numberOfPages,filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log('error: ' + error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                onLoadProgress={(progress) => {console.log('progress: ' + progress)}}/>
        </View>
    )
}

export default PdfReader