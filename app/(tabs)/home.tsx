import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView } from '@gorhom/bottom-sheet';

import HomeTabs from '@/components/HomeTabs';
import MainPanel from '@/components/MainPanel';
import CustomBackground from '@/components/CustomBottomSheet';
import Notification from '@/components/NotificationBar';
import HomeMenu  from '@/components/HomeMenu';
import HubUpdateCard from '@/components/Updates';
import Picture from '@/components/Picture';


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
         <View style={styles.scrollableContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <HomeTabs selectedTab={selectedTab} onTabChange={setSelectedTab } />
                <Picture />
            </View>

            <Notification />
               <HubUpdateCard
                 hubName="Photography Hub"
                 author="John Doe"
                 caption="Amazing sunset capture!"
                 timestamp="1 hour ago"
                 imageSource="#f0f0f0"
               />
                <HubUpdateCard
                 hubName="Photography Hub"
                 author="John Doe"
                 caption="Amazing sunset capture!"
                 timestamp="1 hour ago"
                 imageSource="#f0f0f0"
               />
               <HubUpdateCard
                hubName="Photography Hub"
                author="John Doe"
                caption="Amazing sunset capture!"
                timestamp="1 hour ago"
                imageSource="#f0f0f0"
              />
               {/* Add more HubUpdateCard components as needed */}
            </ScrollView>

         </View>

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
    paddingLeft: 16,
    paddingRight: 16
  },
  bottomsheet:{
      flex: 1,
  },
  scrollableContent: {
      width: '100%', // Full width
      BorderRadius: 20,
      marginTop: 10,
      marginBottom: 180, // Adjust margin to avoid overlap with BottomSheet and HomeMenu
      justifyContent: "flex-start",
      alignItems: "center"
    },
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop:10
    }
});
