import React, { useMemo } from "react";
import {
    View,
    StyleSheet,
    ViewStyle,
    StyleProp
} from "react-native";
export interface CenterProps {
    children: React.ReactChildren,
    style?: StyleProp<ViewStyle>
}
export function Center({ children, style }: CenterProps) {
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
        alignItems: 'center'
    }
});
