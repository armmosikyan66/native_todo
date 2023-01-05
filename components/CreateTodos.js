import {View, StyleSheet, TextInput, Button} from "react-native";
import {useState} from "react";

export const CreateTodos = ({setTodos}) => {
    const [text, setText] = useState("");

    const handleChange = (text) => setText(text);
    const submitBtn = () => {
        if (!text.length) return; //todo show model that text is empty
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        setTodos(prev => [...prev, {
            text,
            date: `${hours}:${minutes}`,
            id: Math.random(),
        }]);
        setText("")
    }

    return (
        <View style={styles.wrapper}>
            <TextInput value={text} onChangeText={handleChange} style={styles.input} placeholder={"Create Todo"} />
            <Button onPress={submitBtn} style={styles.button} title={"Create"} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        flexDirection: "row",
        width: "100%",
        borderBottomWidth: 2,
        borderColor: "#1a73e8"
    },
    input: {
        width: "75%",
        fontSize: 18,
        textTransform: "capitalize"
    },
    button: {
        width: "25%",
        backgroundColor: "transparent",
        borderWidth: 0,
        fontSize: 18,
    }
})