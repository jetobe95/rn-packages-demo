import React, { useMemo } from "react";
import {
  View,
} from "react-native";
export interface SizedBoxProps{
    width?:number
    height?:number
    testID?:string
}
export function SizedBox({ width, height,testID }:SizedBoxProps) {
  const style = useMemo(() => ({
    height,
    width
  }), [width, height])
  return (
    <View style={style} testID={testID} />
  )
}
