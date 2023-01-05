import {StatusBar} from 'expo-status-bar';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Header} from "./components/Header";
import {CreateTodos} from "./components/CreateTodos";
import {Todos} from "./components/Todos";
import {useState} from "react";

export default function App() {
    const [todos, setTodos] = useState([]);

    const removeTodo = (id) => {
        setTodos(prev => prev.filter((todo) => todo.id !== id))
    }

    return (
        <View style={styles.container}>
            <Header/>
            <CreateTodos setTodos={setTodos}/>
            <Todos removeTodo={removeTodo} todos={todos}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});
