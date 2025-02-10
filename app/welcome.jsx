import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { wp } from '../helpers/common'
import { hp } from '../helpers/common'
import { theme } from '../constants/theme'

export default function Welcome() {
    return (
        <ScreenWrapper>
            <StatusBar style='dark' />
            <View style={styles.container}>
                <Image style={styles.Image} resizeMode='contain' source={require('../assets/images/welcome.png')} />
                {/*Title and punch line */}
                <View style={{ gap: 15 }}>
                    <Text style={styles.title}>LinkUp!</Text>
                    <Text style={styles.punchline}>where every thought finds a home and every image tells a story.</Text>
                </View>
            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        paddingHorizontal: wp(4),

    },
    Image: {
        height: hp(30),
        width: wp(100),
        alignSelf: 'center'
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        fontWeight: theme.fonts.extraBold,
        textAlign: 'center'
    },
    punchline: {
        textAlign: 'center',
        paddingHorizontal: wp(10),
        fontSize: hp(1.7),
        fontColor: theme.colors.text
    }

})