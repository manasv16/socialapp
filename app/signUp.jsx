import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { wp, hp } from '../helpers/common'
import { theme } from '../constants/theme'
import Input from '../components/Input'
import Icon from '../assets/icons'
import Button from '../components/Button'
import { supabase } from '../lib/supabase'

const SignUp = () => {
    const router = useRouter();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [loading, setLoading] = useState(false)
    const onSubmit = async () => {
        if (!emailRef.current || !passwordRef.current || !nameRef.current) {
            window.alert('Please fill in all the details');
            return;
        }

        let name = nameRef.current.trim();
        let email = emailRef.current.trim();
        let password = passwordRef.current.trim();

        window.alert(name);
        setLoading(true);

        // Signing up the user
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name },
            },
        });

        // Debugging the response
        //console.log("Supabase Response:", data, error);

        if (error) {
            window.alert(error.message);
        } else {
            console.log("User Created:", data.user);
            console.log("User Metadata:", data.user?.user_metadata);
        }

        setLoading(false);
    };


    return (
        <ScreenWrapper bg='white'>
            <View style={styles.container}>
                <BackButton router={router} />
                <View>
                    <Text style={styles.welcomeText}>
                        Let's,
                    </Text>
                    <Text style={styles.welcomeText}>
                        Get Started
                    </Text>
                </View>

                <View style={styles.form}>
                    <Text style={{ fontSize: hp(1.7), color: theme.fonts.text }}>
                        Please enter your details
                    </Text>
                    <Input
                        icon={<Icon name='user' strokeWidth={1.6} size={26} />}
                        placeholder="Enter your name"
                        onChangeText={value => nameRef.current = value}
                    />
                    <Input
                        icon={<Icon name='mail' strokeWidth={1.6} size={26} />}
                        placeholder="Enter your email"
                        onChangeText={value => emailRef.current = value}
                    />
                    <Input
                        icon={<Icon name='lock' strokeWidth={1.6} size={26} />}
                        placeholder="Enter your password"
                        onChangeText={value => passwordRef.current = value}
                    />

                    <Button title={'Sign in'} loading={loading} onPress={onSubmit} />
                </View>
                {/*footer*/}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Already have an account?
                    </Text>
                    <Pressable onPress={() => router.push('login')}>
                        <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
                            Login!
                        </Text>
                    </Pressable>

                </View>


            </View>

        </ScreenWrapper>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5), // Ensure wp is imported correctly
    },
    welcomeText: {
        fontSize: hp(4), // Ensure hp is imported correctly
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