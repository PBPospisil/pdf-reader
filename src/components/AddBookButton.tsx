import React from "react"
import { Button, View } from "react-native"
import { useAppDispatch } from "../hooks/hooks"
import { addBookToLibrary } from "../middleware/AddBookToLibrary"
import { ShelfStyles } from "../ui/styles"

const AddBookButton = () => {

    const dispatch = useAppDispatch()

    function handlePress()
    {
        dispatch(addBookToLibrary())
    }

    return (
        <View style={ShelfStyles.bookButton}>
            <Button 
                title='+ Book' 
                onPress={handlePress} 
                color='black'
            />
        </View>
        
    )
}
export default AddBookButton