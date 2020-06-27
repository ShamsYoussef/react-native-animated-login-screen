import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';

import Animated from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window');
const { Value, event, block, eq, cond, set } = Animated
const loginScreen = () => {

    const [buttonOpacity, setButtonOpacity] = useState(new Value(1));
    const onStateChange = e => {
        if (e.nativeEvent.state === State.END) {
           setButtonOpacity(0)
        }
    };

    return (
        <View style={styles.container}>

            <View style={{ ...StyleSheet.absoluteFill }}>
                <Image resizeMode="contain" style={styles.image} source={require('../assets/images/46.jpg')} />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", width: width, position: "absolute", top: 80 }}>
                <Text style={{ color: '#2e808b', fontSize: width / 18, fontFamily: 'sans-serif-medium', fontWeight: 'bold' }}>Stay Safe..</Text>

                <Text style={{ color: '#FFF', fontSize: width / 15, fontFamily: 'sans-serif-medium', fontWeight: 'bold' }}>Work From Home</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={{ ...styles.button, backgroundColor: '#f7b640' }}>
                    <Text style={styles.buttonText} >SIGN UP</Text>
                </View>
                <TapGestureHandler onHandlerStateChange={onStateChange}>
                    <Animated.View style={{...styles.button, opacity: buttonOpacity}}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </Animated.View>
                </TapGestureHandler>

            </View>
        </View>
    )
}

export default loginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b7d1d2',
        justifyContent: "flex-end"
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        bottom: 50,
        borderRadius: 100
    },
    buttonContainer: {
        justifyContent: "center",
        height: height / 3,
    },
    button: {
        backgroundColor: '#FFF',
        marginVertical: 5,
        marginHorizontal: 30,
        height: height / 14,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25
    },
    buttonText: {
        fontSize: width / 23,
        fontWeight: "bold"
    }
})
