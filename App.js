import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';

class App extends React.Component {
    state = {
        text: "",
        todo: []
    };

    addTodo = () => {
        const newTodo = this.state.text;
        const arr = this.state.todo;
        arr.push(newTodo);
        this.setState({todo: arr, text: ''});
    };

    deleteTodo = (t) => {
        const deleteTodo = this.state.todo.filter(todo => todo !== t);
        this.setState({todo: deleteTodo});
    };

    renderTodos = () => {
        return this.state.todo.map(t => {
            return (
                <TouchableOpacity key={t}>
                    <Text style={styles.todo}
                          onPress={() => {
                              this.deleteTodo(t)
                          }}>{t}</Text>
                </TouchableOpacity>
            );
        });
    };

    render() {
        return (
            <View style={styles.wholeStyle}>
                <View style={styles.viewStyle}>
                    <Text style={styles.header}>Notes App</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={text => this.setState({text})}
                        value={this.state.text}
                    />
                    <Button
                        title="Add Todo"
                        color="white"
                        onPress={this.addTodo}/>
                    <View style={{marginTop: 100}}/>
                    {this.renderTodos()}
                </View>
            </View>
        );
    }
}

const
    styles = {
        wholeStyle: {
            backgroundColor: "#0288D1",
            flex: 1
        },
        viewStyle: {
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
        },
        inputStyle: {
            height: 40,
            width: '100%',
            borderColor: 'white',
            borderWidth: 1
        },
        header: {
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold'
        },
        todo: {
            fontSize: 24,
            color: 'white'
        }
    };

export default App;