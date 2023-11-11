import React from "react"
import { Text, View } from "react-native"
import { PdfMetaDataStyles } from "../ui/styles"

interface PdfMetaDataProps {
    pdfSize: number | undefined;
}

const renderItem = (pdfSize: number | undefined) =>
{
    if(pdfSize === undefined) {
        return (
            <View style={PdfMetaDataStyles.container}>
                <Text style={PdfMetaDataStyles.pdfAddedDate}></Text>
            </View>
        )
    }
    return (
        <View style={PdfMetaDataStyles.container}>
            <Text style={PdfMetaDataStyles.bookSizeText}>{pdfSize}</Text>
            <Text style={PdfMetaDataStyles.metaDataSeparator}> • </Text>
            <Text style={PdfMetaDataStyles.pdfAddedDate}></Text>
        </View>
    )
}

export const PdfMetaDataView = (props: PdfMetaDataProps) =>
{

    return (
        renderItem(props.pdfSize)
    )
}