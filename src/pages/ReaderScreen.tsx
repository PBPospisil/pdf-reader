import React from "react"
import { View } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from "../types"
import EbookReader from "../components/EbookReader"

type ReaderScreenNavigationProp = RouteProp<
  RootStackParamList,
  'Reader'
>

type Props = {
    route: ReaderScreenNavigationProp;
}

const ReaderScreen = ({ route }: Props) =>
{
    const { book } = route.params

    return (
        <View>
            <EbookReader book={ book }/>
        </View>
    )
}

export default ReaderScreen