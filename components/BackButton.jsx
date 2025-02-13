import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from '../assets/icons';
import { theme } from '../constants/theme';

const BackButton = ({ router, size = 26 }) => {
    return (
        <View>
            <Pressable onPress={() => router.back()} style={styles.button}>
                <Icon name="arrowLeft" strokeWidth={2} size={size} color={theme.colors.rose} />
            </Pressable>
        </View>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        borderRadius: theme.radius.sm,
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.07)',
    },
});
