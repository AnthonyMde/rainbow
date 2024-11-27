
import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import HistoryScreen from "./history";
import HomeScreen from "./home";

const HomePager = () => {
    return <View style={styles.container}>
        <PagerView initialPage={0} style={styles.pager}>
            <View key="1">
                <HomeScreen />
            </View>
            <View key="2">
                <HistoryScreen />
            </View>
        </PagerView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pager: {
        flex: 1
    }
})

export default HomePager;