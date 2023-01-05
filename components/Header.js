import {StyleSheet, Text, View} from "react-native";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reactive ToDos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a73e8',
        width: "100%",
        paddingTop: 50,
        paddingHorizontal: 25,
        paddingBottom: 15,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        color: '#fff'
    }
});
