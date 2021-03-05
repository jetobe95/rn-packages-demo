import React, { useMemo } from "react";
import {
    View,
    StyleSheet,
    StyleProp,
    ViewStyle
} from "react-native";
export interface RowProps {
    children: React.ReactChildren,
    style?: StyleProp<ViewStyle>
}
export function Row({ children, style }: RowProps) {
    const allStyles = useMemo(() => ([
        styles.container,
        style
    ]), [styles.container, style])
    return (
        <View style={allStyles} >
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});
