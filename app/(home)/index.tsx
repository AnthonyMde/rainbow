
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";
import HistoryScreen from "./history";
import HomeScreen from "./home";

enum Tabs {
    Home = "Home",
    History = "History"
}

const HomePager = () => {
    const [activeTab, setActiveTab] = useState<Tabs>(Tabs.Home);

    const pagerRef = useRef<PagerView>(null);

    const navigateToPage = (page: Tabs) => {
        const index = page === Tabs.Home ? 0 : 1;
        pagerRef.current?.setPage(index);
        setActiveTab(page);
    }

    return <View style={styles.container}>
        <View style={styles.buttonsContainer}>
            {Object.values(Tabs).map((tab) => (
                <TabButton
                    key={tab}
                    title={tab}
                    isActive={tab === activeTab}
                    onPress={() => navigateToPage(tab)}
                />
            ))}
        </View>
        <PagerView
            ref={pagerRef}
            initialPage={0}
            style={styles.pager}
            onPageSelected={(e) => {
                const tab = e.nativeEvent.position === 0 ? Tabs.Home : Tabs.History;
                setActiveTab(tab);
            }}
        >
            <View key="1">
                <HomeScreen />
            </View>
            <View key="2">
                <HistoryScreen />
            </View>
        </PagerView>
    </View>
}

const TabButton = ({ title, isActive, onPress }: {
    title: string,
    isActive: boolean,
    onPress: () => void
}) => (
    <TouchableOpacity
        style={[styles.tab, isActive && styles.activeTab]}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`Go to ${title}`}>
        <Text
            style={isActive ? styles.activeTabText : styles.tabText}>
            Home</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8"
    },
    buttonsContainer: {
        marginTop: 24,
        flexDirection: 'row',
        borderRadius: 25,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
        width: '70%',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    tab: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    activeTab: {
        backgroundColor: "#FFD966",
    },
    pager: {
        flex: 1
    },
    tabText: {
        fontSize: 16,
        color: "#666",
        fontWeight: "500",
    },
    activeTabText: {
        color: "#000",
        fontWeight: "bold",
    },
})

export default HomePager;