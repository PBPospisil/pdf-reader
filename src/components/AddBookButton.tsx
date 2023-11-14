import React from "react"
import { Image, Pressable } from "react-native"
import { useAppDispatch } from "../hooks/hooks"
import { addBookToLibrary } from "../middleware/AddBookToLibrary"
import { AddBookStyles, ShelfStyles } from "../ui/styles"
import { ADD_BOOK_ICON } from "../image"

const AddBookButton = () => {

    const dispatch = useAppDispatch()

    function handlePress()
    {
        dispatch(addBookToLibrary())
    }

    return (
        <Pressable 
            onPress={handlePress}>
            <Image 
                source={ADD_BOOK_ICON}
                style={AddBookStyles.image}
            />
        </Pressable>
        
    )
}
export default AddBookButton