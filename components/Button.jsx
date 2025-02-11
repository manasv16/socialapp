import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { wp, hp } from '../helpers/common';
import { theme } from '../constants/theme';
import Loading from './Loading';

const Button = ({
    onPress = () => { },
    buttonStyle,
    textStyle,
    loading = false,  // Change default loading to false
    title = '',
    hasShadow = true
}) => {
    //console.log("Loading component is rendering");
    //console.log("Loading component is rendering", loading);
    const shadowStyle = hasShadow ? {
        backgroundColor: theme.colors.primary,
        shadowColor: theme.colors.dark,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    } : {};

    if (loading) {

        return (
            <View style={[styles.button, buttonStyle, { backgroundColor: 'white' }]}>
                <Loading />
            </View>
        );
    }

    return (
        <Pressable
            onPress={onPress}
            style={[styles.button, buttonStyle, shadowStyle]}
        >

            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.radius.xl,
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(6.6),
    },
    text: {
        fontWeight: theme.fonts.bold,
        color: 'white',
        fontSize: hp(2.5),
    },
});

export default Button;
