import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Button = (
    onPress = () => { },
    buttonStyle,
    textStyle,
    loading = false,
    title = '',
    hasShadow = true
) => {

    const shadowStyle = {

    }
    return (
        <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
            <Text style={ } >Button</Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({})
export default Button