import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Animated, { Easing, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type HomeTabsProps = {
  selectedTab: "Hubs" | "All";
  onTabChange: (tab: "Hubs" | "All") => void;
};

const HomeTabs: React.FC<HomeTabsProps> = ({ selectedTab, onTabChange }) => {


  const hubFocus = useSharedValue(selectedTab === "Hubs" ? 1 : 0);
  const allFocus = useSharedValue(selectedTab === "All" ? 1 : 0);

  const handleTabPress = (tab: "Hubs" | "All") => {
    onTabChange(tab);

    if (tab === "Hubs") {
      hubFocus.value = withTiming(1, { duration: 300, easing: Easing.ease });
      allFocus.value = withTiming(0, { duration: 300, easing: Easing.ease });
    } else {
      hubFocus.value = withTiming(0, { duration: 300, easing: Easing.ease });
      allFocus.value = withTiming(1, { duration: 300, easing: Easing.ease });
    }
  };

  const hubAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(hubFocus.value, [0, 1], ['#EDF6F9', '#AEC5EB']),
    };
  });

  const allAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(allFocus.value, [0, 1], ['#EDF6F9', '#AEC5EB']),
    };
  });

  useEffect(() => {
    if (selectedTab === "Hubs") {
      hubFocus.value = withTiming(1, { duration: 300, easing: Easing.ease });
      allFocus.value = withTiming(0, { duration: 300, easing: Easing.ease });
    } else {
      hubFocus.value = withTiming(0, { duration: 300, easing: Easing.ease });
      allFocus.value = withTiming(1, { duration: 300, easing: Easing.ease });
    }
  }, [selectedTab]);

  return (
    <View style={styles.tabs}>
      <Animated.View style={[styles.tab, hubAnimatedStyle]}>
        <TouchableOpacity onPress={() => handleTabPress("Hubs")}>
          <Text style={styles.tabsText}>Hubs</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.tab, allAnimatedStyle]}>
        <TouchableOpacity onPress={() => handleTabPress("All")}>
          <Text style={styles.tabsText}>All</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: "#EDF6F9",
    width: 190,
    height: 40,
    borderRadius: 50,
    marginTop: 40,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  tab: {
    width: 90,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  tabsText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "Manrope",
    textAlign: "center",
  },
})
export default HomeTabs;