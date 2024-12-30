import React, { useMemo, useRef, useCallback, usememo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';

import Chat from '@/components/Chat';

const ChatPanel = () => {
    const chats = useMemo(() => Array.from({ length: 50 }, (_, index) => ({
                                      id: index + 1,
                                      name: `Chat ${index + 1}`,
                                      lastMessage: `This is the last message for chat ${index + 1}.`,
                                      timestamp: '1 hour ago', // You can adjust this
                                    }))
                        )

  return (
    <View style={styles.chats}>
        <View>
            <Text style={styles.Title}> <Icon name="inbox" size={30}  color="#7E9DBC"/> </Text>
        </View>
        <BottomSheetScrollView style={styles.chatList} showsVerticalScrollIndicator={false}>
             {chats.map((chat) => (
                <Chat key={chat.id} content={chat} />
            ))}
        </BottomSheetScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
    chats: {
      backgroundColor: "#EDF6F9",
      width: "100%",
      height: "100%",
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop:10
    },
    chatList: {
        width: '100%',
        marginTop: 5,
        flex: 1,
        gap: 10
    },
    Title: {
        color: "#000",
        fontSize: 20,
        fontWeight: "800",
        fontFamily: "Manrope",
        textAlign: "left",
    }
});

export default ChatPanel;
