import React from "react"
import { FileType } from "../types"
import EpubReader from "./EpubReader"
import PdfReader from "./PdfReader"

type EbookProps = {
    fileType: FileType;
}

const EbookReader = (props: EbookProps) =>
{
    if(props.fileType === FileType.epub) {
        return <EpubReader></EpubReader>
    }
    if(props.fileType === FileType.pdf) {
        return <PdfReader></PdfReader>
    }
}

export default EbookReader