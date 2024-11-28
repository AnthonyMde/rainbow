import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import HistoryScreen from "./history";
import HomeScreen from "./home";
import { useSafeAreaInsets } from "react-native-safe-area-context";

enum Tabs {
    Home = "Home",
    History = "History",
}

const HomePager = () => {
    const [tabWidth, setTabWidth] = useState(0)
    const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Home)
    const insets = useSafeAreaInsets()
    const pagerRef = useRef<PagerView>(null)

    const translateX = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }))

    return (
        <LinearGradient
            colors={["#F5F8FF", "#F9EAF4", "#FDC5D8"]}
            locations={[0, 0.75, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.gradient, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
            <View style={styles.container}>
                <View
                    style={styles.tabsContainer}
                    onLayout={(e) => setTabWidth(e.nativeEvent.layout.width / Object.values(Tabs).length)}
                >
                    <Animated.View style={[styles.slider, animatedStyle, { width: tabWidth }]} />
                    {Object.values(Tabs).map((tab, index) => (
                        <TouchableOpacity
                            key={tab}
                            style={styles.tab}
                            onPress={() => pagerRef.current?.setPage(index)}
                        >
                            <Text style={activeTab === tab ? styles.activeTabText : styles.tabText}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <PagerView
                    ref={pagerRef}
                    initialPage={0}
                    style={styles.pager}
                    onPageScroll={(e) => {
                        const { position, offset } = e.nativeEvent;
                        translateX.value = (position + offset) * tabWidth;
                    }}
                    onPageSelected={(e) => setActiveTab(Object.values(Tabs)[e.nativeEvent.position])}
                >
                    <HomeScreen />
                    <HistoryScreen />
                </PagerView>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    tabsContainer: {
        marginTop: 24,
        flexDirection: "row",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        width: "80%",
        alignSelf: "center",
        backgroundColor: "#ffffff",
    },
    tab: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    tabText: {
        fontSize: 14,
        color: "#666",
        fontWeight: "500",
    },
    activeTabText: {
        fontSize: 14,
        color: "#000",
        fontWeight: "600",
    },
    slider: {
        position: "absolute",
        height: "100%",
        backgroundColor: "#FDD2BF",
        borderRadius: 25,
    },
    pager: {
        flex: 1,
    },
});

export default HomePager;
