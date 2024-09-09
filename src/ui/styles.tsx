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
        flex: 1,
        backgroundColor: 'aliceblue'
    },
    list: {
        flex: 16,
    },
    bookViewOnPress: {
        backgroundColor: 'grey',
        width: '100%',
        height: 64,
        padding: 16,
        paddingLeft: 32,
        justifyContent: 'center',
        borderColor: 'black',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.25,
    },
    bookViewDefault: {
        backgroundColor: 'darkgrey',
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
        color: 'aliceblue',
        fontSize: 20,
        fontWeight: "600",
        textShadowOffset: {
            width: .3,
            height: .1
        },
        textShadowColor: 'black',
        textShadowRadius: 1
    }
})

export const PdfMetaDataStyles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    bookSizeText: {
        color: 'aliceblue',
        fontSize: 12,
        fontWeight: "500",
        textShadowOffset: {
            width: .2,
            height: .2
        },
        textShadowColor: 'black',
        textShadowRadius: 1
    },
    metaDataSeparator: {
        color: 'aliceblue',
        fontSize: 12,
        fontWeight: "500",
        textShadowOffset: {
            width: .2,
            height: .2
        },
        textShadowColor: 'black',
        textShadowRadius: 1
    },
    pdfAddedDate: {
        color: 'aliceblue',
        fontSize: 12,
        fontWeight: "500",
        textShadowOffset: {
            width: .2,
            height: .2
        },
        textShadowColor: 'black',
        textShadowRadius: 1
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

export const AddBookStyles = StyleSheet.create({
    image: {
        width: 32,
        height: 32,
    }
})