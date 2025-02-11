import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { StatusBar } from 'expo-status-bar';
import { wp, hp } from '../helpers/common';
import { theme } from '../constants/theme';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

export default function Welcome() {
    const router = useRouter();
    return (
        <ScreenWrapper>
            <StatusBar style="dark" />
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={require('../assets/images/welcome.png')}
                />

                {/* Title and Punchline */}
                <View style={{ gap: 15 }}>
                    <Text style={styles.title}>LinkUp!</Text>
                    <Text style={styles.punchline}>
                        Where every thought finds a home and every image tells a story.
                    </Text>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Button
                        title="Getting Started"
                        buttonStyle={{ marginHorizontal: wp(3) }}
                        onPress={() => router.push('signUp')}
                    />
                    <View style={styles.bottomContainer}>
                        <Text style={styles.loginText}>Already have an account?</Text>
                        <Pressable onPress={() => router.push('login')}>
                            <Text
                                style={[
                                    styles.loginText,
                                    { color: theme.colors.dark, fontWeight: theme.fonts.semibold },
                                ]}
                            >
                                Sign in
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        paddingHorizontal: wp(4),
    },
    image: {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center',
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        fontWeight: theme.fonts.extraBold,
        textAlign: 'center',
    },
    punchline: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        color: theme.colors.text,  // Fixed incorrect fontColor property
    },
    footer: {
        gap: 30,
        width: '100%',
    },
    bottomContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: theme.colors.text,  // Fixed incorrect theme.fonts.text
        fontSize: hp(1.7),
        textAlign: 'center',
    },
});
