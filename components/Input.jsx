import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { theme } from '../constants/theme';
import { hp } from '../helpers/common';

const Input = (props) => {
    return (
        <View style={[styles.container, props.containerStyles && props.containerStyles]}>
            {props.icon && props.icon}
            <TextInput
                style={{ flex: 1 }}
                placeholderTextColor={theme.colors.textLight}
                ref={props.inputRef && props.inputRef}
                {...props}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(7.2),
        paddingHorizontal: 18,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderCurve: 'continuous',
        gap: 12,
    },
});
