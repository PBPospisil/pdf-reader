import React from "react"
import { Book, FileType } from "../types"
import EpubReader from "./EpubReader"
import PdfReader from "./PdfReader"

var RNFS = require('react-native-fs');

type EbookProps = {
    book: Book;
}

const determineReaderType = (props: EbookProps) =>
{
    if(props.book.fileType === FileType.epub) {
        return <EpubReader></EpubReader>
    }
    if(props.book.fileType === FileType.pdf) {
        return <PdfReader book={props.book}></PdfReader>
    }
}

const EbookReader = (props: EbookProps) =>
{
    const renderItem = determineReaderType(props)

    return(
        renderItem
    )
}

export default EbookReader