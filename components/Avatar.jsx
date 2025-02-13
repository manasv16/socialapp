import { StyleSheet, View } from 'react-native';
import React from 'react';
import { wp, hp } from '../helpers/common';
import { theme } from '../constants/theme';
import { Image } from 'expo-image';

const Avatar = ({
    uri,
    size = hp(4.2),
    rounded = theme.radius.md,
    style = {}
}) => {
    return (
        <Image
            source={{ uri }}
            transition={100}  // Fixed transition prop
            style={[styles.avatar, { height: size, width: size, borderRadius: rounded }, style]}  // Fixed style merging
        />
    );
};

export default Avatar;

const styles = StyleSheet.create({
    avatar: {
        borderCurve: 'continuous',
        borderColor: theme.colors.darkLight,
        borderWidth: 1,
    }
});
