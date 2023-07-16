import React from "react"
import { Button, View } from "react-native"
import { Routes } from "../middleware/routes"
import { useAppDispatch } from "../hooks/hooks"
import { addBookToLibrary } from "../middleware/AddBookToLibrary"

const AddBookButton = () => {

    const dispatch = useAppDispatch()

    function handlePress()
    {
        dispatch(addBookToLibrary())
    }

    return (
        <View>
            <Button 
                title='+ Book' 
                onPress={handlePress} 
                color='black'
            />
        </View>
        
    )
}
export default AddBookButton