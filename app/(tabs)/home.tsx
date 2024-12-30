import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useMemo, useCallback } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

import HomeTabs from '@/components/HomeTabs';
import ChatPanel from '@/components/Chats';
import CustomBackground from '@/components/CustomBottomSheet';
import Notification from '@/components/NotificationBar';
import HomeMenu from '@/components/HomeMenu';
import HubUpdateCard from '@/components/Updates';
import Picture from '@/components/Picture';

const { height } = Dimensions.get('window');

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<'Hubs' | 'Discover'>('Hubs');
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['8%', '40%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('sheet changed to:', index);
  }, []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" translucent={true} />

      <View style={styles.home}>
        <View style={styles.header}>
          <View style={styles.tabs}>
            <HomeTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
           </View>
          <View
            style={{
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'center',
              paddingTop: 40,
            }}
          >
            <Picture />
          </View>
        </View>

        {/* Content for the selected tab */}
        {selectedTab === 'Hubs' ? (
          <ScrollView
            style={styles.scrollableContent}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
          >
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
        ) : (
          <View style={styles.scrollableContent}>
            {/* Content for Discover tab */}
            <Text>Discover Content</Text>
          </View>
        )}

        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundComponent={CustomBackground}
        >
          <BottomSheetScrollView style={styles.bottomsheet}>
            <ChatPanel selectedTab={selectedTab} />
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#AEC5EB',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  bottomsheet: {
    flex: 1,
  },
  scrollableContent: {
    width: '100%', // Full width
    BorderRadius: 20,
    marginTop: 10,
    marginBottom: 80,

    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 0,
    height: '85',
  },
  tabs: {
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      paddingTop: 20,

  }

});