import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window');
const { Value, block, cond, set, Clock, stopClock, startClock, clockRunning, timing, debug, interpolate, Extrapolate } = Animated
const loginScreen = () => {

    const [buttonOpacity, setButtonOpacity] = useState(new Value(1));
    const onStateChange = e => {
        if (e.nativeEvent.state === State.END) {
            setButtonOpacity(runTiming(new Clock(), 1, 0));

        }
    };

    const ButtonY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: Extrapolate.CLAMP
    })

    const backgroundY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [-height / 3, 0],
        extrapolate: Extrapolate.CLAMP
    })

    const imageY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [height / 4.5, 0],
        extrapolate: Extrapolate.CLAMP
    })

    const textY = interpolate(buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [-200, 0],
        extrapolate: Extrapolate.CLAMP
    })

    const runTiming = (clock, value, distance) => {
        const state = {
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            frameTime: new Value(0),
        };

        const config = {
            duration: 1000,
            toValue: new Value(0),
            easing: Easing.inOut(Easing.ease),
        };

        return block([
            cond(clockRunning(clock), 0, [
                set(state.finished, 0),
                set(state.time, 0),
                set(state.position, value),
                set(state.frameTime, 0),
                set(config.toValue, distance),
                startClock(clock),
            ]),

            timing(clock, state, config),
            cond(state.finished, debug('stop clock', stopClock(clock))),
            state.position,

        ]);


    }

    return (
        <View style={styles.container}>

            <Animated.View style={{ ...StyleSheet.absoluteFill, transform: [{ translateY: backgroundY }], backgroundColor: '#b7d1d2' }}>
                <Animated.Image resizeMode="contain" style={{ ...styles.image, transform: [{ translateY: imageY }], }} source={require('../assets/images/46.jpg')} />
            </Animated.View>
            <Animated.View style={{ ...{ justifyContent: "center", alignItems: "center", width: width, position: "absolute", top: 80 }, transform: [{ translateY: textY }], opacity: buttonOpacity }}>
                <Text style={{ ...styles.textStyle, fontSize: width / 18, color: '#2e808b' }}>Stay Safe..</Text>

                <Text style={{ ...styles.textStyle, fontSize: width / 15 }}>Work From Home</Text>
            </Animated.View>
            <View style={styles.buttonContainer}>
                <Animated.View style={{ ...styles.button, backgroundColor: '#f7b640', opacity: buttonOpacity, transform: [{ translateY: ButtonY }] }}>
                    <Text style={styles.buttonText} >SIGN UP</Text>
                </Animated.View>
                <TapGestureHandler onHandlerStateChange={onStateChange}>
                    <Animated.View style={{ ...styles.button, opacity: buttonOpacity, transform: [{ translateY: ButtonY }] }}>
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
        // backgroundColor: '#b7d1d2',
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
    },
    textStyle: {
        color: '#FFF',
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold'
    }
})
