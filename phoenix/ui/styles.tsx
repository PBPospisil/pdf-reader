import { StyleSheet } from "react-native"

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
        padding: 4
    },
    body: {
        flex: 9
    }
})