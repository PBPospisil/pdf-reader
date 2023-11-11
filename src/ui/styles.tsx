import { StyleSheet, Dimensions } from "react-native"

export const LibraryStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    header: {
        flex: 1,
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 16
    },
    body: {
        flex: 16
    }
})

export const ShelfStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 16,
    },
    bookButton: {
        flex: 1,
        justifyContent: 'center'
    },
    bookViewOnPress: {
        backgroundColor: 'whitesmoke',
        width: '100%',
        height: 64,
        padding: 16,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 0.5
    },
    bookViewDefault: {
        backgroundColor: 'mintcream',
        width: '100%',
        height: 64,
        padding: 16,
        paddingLeft: 32,
        justifyContent: 'center',
        borderColor: 'black',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.25,
        
    },
    bookTitleText: {
        color: 'black',
        fontSize: 20,
        fontWeight: "600"
    }
})

export const PdfMetaDataStyles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    bookSizeText: {
        color: 'black',
        fontSize: 12,
        fontWeight: "400"
    },
    metaDataSeparator: {
        color: 'black',
        fontSize: 12,
        fontWeight: "400"
    },
    pdfAddedDate: {
        color: 'black',
        fontSize: 12,
        fontWeight: "400"
    }
})

export const PdfStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    pdf: {
        flex:1,
        width: Dimensions.get('window').width,
    }
})