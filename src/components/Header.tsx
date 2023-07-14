import React from "react"
import { Text } from "react-native"
import { LibraryStyles } from "../ui/styles"

interface HeaderProps {
    title: string;
}

export const Header = (props: HeaderProps) =>
{
    return (
        <Text style={LibraryStyles.header}>Library</Text>
    )
}