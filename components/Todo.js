import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";

export const Todo = ({text, date, removeTodo, id}) => {    return (
        <TouchableOpacity activeOpacity={0.7} onLongPress={removeTodo.bind(null, id)}>
            <View style={styles.todo}>
                <Text style={styles.text}>
                    {text}
                </Text>
                <Text style={styles.text}>
                    {date}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        color: "#fff",
        padding: 10,
        borderRadius: 3,
        backgroundColor: "#1a73e8",
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    text: {
        color: "#fff",
        fontSize: 16
    }
})