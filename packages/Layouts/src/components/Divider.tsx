import React, { useMemo } from "react";
import {
    StyleProp,
    View,
    ViewStyle,
} from "react-native";
export interface DividerProps {
    height: number
    color: string
}
export function Divider({ color, height = 1 }: DividerProps) {
    const style = useMemo(() => ({
        height,
        marginVertical: 10,
        backgroundColor: color
    }), [height])
    return (
        <View style={style} />
    )
}
