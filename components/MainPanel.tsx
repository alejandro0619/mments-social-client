import React, { useMemo, useRef, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Chat from '@/components/Chat';

type MainPanelProps =  {
        selectedTab: "Hubs" | "All";
}
const MainPanel: React.FC<MainPanelProps> = ({selectedTab}) => {

  return (
    <View style={styles.chats}>
        <View>
            <Text style={styles.Title}> 🗨️ Chats </Text>
        </View>
        <View style={styles.chatList}>
            <Chat />
            <Chat />
            <Chat />
            <Chat />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    chats: {
      backgroundColor: "#EDF6F9",
      width: "100%",
      height: "100%",
      flex: 1,
      paddingRight: 16,
      paddingLeft: 16,
      paddingBottom: 16,
      paddingTop: '10%',
      justifyContent: "flex-start",
      alignItems: "center",
    },
    chatList: {
        flex: 1,
        flexDirection: 'column',
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

export default MainPanel;
