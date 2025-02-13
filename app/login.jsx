import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import BackButton from '../components/BackButton';
import { useRouter } from 'expo-router';
import { wp, hp } from '../helpers/common';
import { theme } from '../constants/theme';
import Input from '../components/Input';
import Icon from '../assets/icons';
import Button from '../components/Button';
import { supabase } from '../lib/supabase';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Please fill in all the details');
            return;
        }

        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password.trim(),
        });
        console.log(error);
        setLoading(false);

        if (error) {
            Alert.alert("Login failed", error.message);
        } else {
            Alert.alert("Login successful");
            // router.push('/home'); // Redirect after login
        }
    };

    return (
        <ScreenWrapper bg='white'>
            <View style={styles.container}>
                <BackButton router={router} />
                <View>
                    <Text style={styles.welcomeText}>Hey,</Text>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                </View>

                <View style={styles.form}>
                    <Text style={{ fontSize: hp(1.7), color: theme.fonts.text }}>
                        Please login to continue
                    </Text>
                    <Input
                        icon={<Icon name='mail' strokeWidth={1.6} size={26} />}
                        placeholder="Enter your email"
                        onChangeText={(value) => setEmail(value)}
                    />
                    <Input
                        icon={<Icon name='lock' strokeWidth={1.6} size={26} />}
                        placeholder="Enter your password"
                        secureTextEntry
                        onChangeText={(value) => setPassword(value)}
                    />
                    <Text style={styles.forgotPassword}>Forget Password?</Text>
                    <Button title={'Log in'} loading={loading} onPress={onSubmit} />
                </View>
                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Do not have an account?</Text>
                    <Pressable onPress={() => router.push('signUp')}>
                        <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
                            Sign Up!
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: theme.fonts.semibold,
        color: theme.colors.text,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6),
    },
});