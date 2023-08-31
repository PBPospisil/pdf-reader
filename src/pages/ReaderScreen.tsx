import React from "react"
import { View } from 'react-native'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "../types";

type ReaderScreenNavigationProp = RouteProp<
  RootStackParamList,
  'Reader'
>

type Props = {
    route: ReaderScreenNavigationProp;
}

const ReaderScreen = ({route}: Props) => {

    const { fileType } = route.params

    return (
        <View>
        </View>
    )
}

export default ReaderScreen