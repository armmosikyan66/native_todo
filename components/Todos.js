import {ScrollView, View, StyleSheet} from "react-native";
import {Todo} from "./Todo";
import {Fragment} from "react";

export const Todos = ({todos, removeTodo}) => {
    return (
        <ScrollView style={styles.parent}>
            <View style={styles.wrapper}>
                {todos.length ? todos.reverse().map((todo, index) => (
                    <Fragment key={todo + index}>
                        <Todo
                            index={index}
                            removeTodo={removeTodo}
                            {...todo}
                        />
                    </Fragment>
                )) : null}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    parent: {
        width: "100%",
        height: "100%",
        backgroundColor: "#eee",
    },
    wrapper: {
        paddingTop: 50,
        paddingHorizontal: 25,
        paddingBottom: 20,
        width: "100%",
        height: "100%",
    }
})