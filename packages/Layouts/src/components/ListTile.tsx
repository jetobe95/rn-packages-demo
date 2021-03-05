import React from "react";
import { SizedBox } from "./SizedBox";
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
interface ListTileProps {
    leading?: React.ReactElement,
    title?: React.ReactElement,
    subtitle?: React.ReactElement,
    trailing?: React.ReactElement,
    onPress?(): void,
}
export function ListTile({
    leading,
    title,
    subtitle,
    trailing,
    onPress,
}: ListTileProps) {
    const hasleading = !!leading;
    const isPressable = !!onPress
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={(onPress) ? 0.8 : 1} disabled={!isPressable}>
            <View style={[styles.container, !hasleading ? { paddingHorizontal: 0, paddingRight: 10 } : null]}>
                {leading}
                {hasleading ? <SizedBox width={10} /> : null}
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    {title}
                    {subtitle}
                </View>
                {trailing}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    }
});