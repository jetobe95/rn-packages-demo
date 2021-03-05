import React, { useMemo } from "react";
import {
    StyleProp,
    View,
    ViewStyle,
} from "react-native";
export interface FlexibleProps {
    children: React.ReactChildren,
    style?: StyleProp<ViewStyle>,
    flex?: number
}
export function Flexible({ flex = 1, children, style }: FlexibleProps) {
    const styles = useMemo(() => ([{ flex }, style]), [flex, style])
    return (
        <View style={styles} >
            {children}
        </View>
    )
}
