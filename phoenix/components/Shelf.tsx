import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native';

const Shelf = () => {
    const [books, setBooks] = useState([]);

    return (
        <View>
            <FlatList
            data={[]}
            renderItem={() => <Text></Text>}
            />
        </View>
    );
}

export default Shelf;