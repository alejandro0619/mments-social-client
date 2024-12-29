import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolateColor,
} from 'react-native-reanimated';

import Picture from '@/components/Picture';


const Chat = () => {
    const scale = useSharedValue(1);
    const backgroundColor = useSharedValue(0); // 0 para estado normal, 1 para presionado

    const handlePressIn = () => {
        scale.value = withTiming(0.98, { duration: 200 });
        backgroundColor.value = withTiming(1, { duration: 200 });
    };

    const handlePressOut = () => {
        scale.value = withTiming(1, { duration: 200 });
        backgroundColor.value = withTiming(0, { duration: 200 });
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        backgroundColor: interpolateColor(
            backgroundColor.value,
            [0, 1],
            ['#EDF6F9', '#D6EAF8'] // Colores de transición
        ),
    }));

    return (
        <Animated.View style={[styles.chatContainer, animatedStyle]}>
            <Pressable
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => console.log('Chat pressed')}
                style={styles.pressableContent}
            >
                <Picture />
                <View style={styles.content}>
                    <View style={styles.chatName}>
                        <Text style={styles.chatNameText}>Nombre</Text>
                    </View>
                    <View>
                        <Text style={styles.messagePreview}>This is a preview message</Text>
                    </View>
                </View>
                <View style={styles.timestamp}>
                    <Text>12:00</Text>
                </View>
            </Pressable>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    chatContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        width: Dimensions.get('window').width - 20,
        margin: 10,

    },
    pressableContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    chatName: {
        padding: 5,
        borderRadius: 5,
        marginBottom: 5,
    },
    chatNameText: {
        color: 'black',
        fontWeight: 'bold',
    },
    messagePreview: {
        color: '#777',
    },
    timestamp: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});

export default Chat;
