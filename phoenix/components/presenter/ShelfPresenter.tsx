import React from "react"
import { View, FlatList, Text } from "react-native"

const ShelfPresenter = () => {
    return (
        <View>
            <FlatList
                data={[]}
                renderItem={() => <Text></Text>}
            />
        </View>
    )
}