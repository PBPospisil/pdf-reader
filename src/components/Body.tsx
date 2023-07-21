import { StyleProp, View, ViewStyle } from "react-native"
import { FC } from "react"

interface BodyProps {
    style: StyleProp<ViewStyle>
    RenderItem: FC
}

export const Body = ({ style, RenderItem }: BodyProps) => {
    return (
        <View style={style}>
            <RenderItem/>
        </View>
    )
}