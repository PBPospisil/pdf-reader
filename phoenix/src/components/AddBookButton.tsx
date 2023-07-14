import React from "react"
import { Button, View } from "react-native"
import { pickDocument } from "../services/DocumentPickerService"

function handlePress()
{
    pickDocument()
        .then(function (success) {
            
        })
        .catch(function (error) {
    
        })
}

const AddBookButton = () => {
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