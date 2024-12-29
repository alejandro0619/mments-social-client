import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView } from '@gorhom/bottom-sheet';

import HomeTabs from '@/components/HomeTabs';
import MainPanel from '@/components/MainPanel';
import CustomBackground from '@/components/CustomBottomSheet';
import Notification from '@/components/NotificationBar';
import HomeMenu  from '@/components/HomeMenu';


const { height } = Dimensions.get("window");

export default function Home() {
    const [selectedTab, setSelectedTab] = useState<"Hubs" | "All">("Hubs");
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ["20%", "70%"], []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log("sheet changed to:", index);
    }, []);

    const openBottomSheet = () => {
        bottomSheetRef.current?.expand();
    }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" translucent={true} />

      <View style={styles.home}>
        <HomeTabs selectedTab={selectedTab} onTabChange={setSelectedTab } />
         <Notification />
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backgroundComponent={CustomBackground}
        >
            <BottomSheetView style={styles.bottomsheet}>
                <MainPanel selectedTab={selectedTab}/>
            </BottomSheetView>
        </BottomSheet>

        <HomeMenu />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#AEC5EB",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bottomsheet:{
      flex: 1,
  }
});
