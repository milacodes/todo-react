import React from 'react';
import './App.css';

import TodoItem from "./TodoItem/todoitem";
import todoData from "./TodoItem/todoData";


class App extends React.Component {
    constructor(){
        super()
        this.state={
            todos: todoData
        }
    }


    // componentDidMount(){
    //     //very first time cmp shows up, React runs this method.
    //     //once and only once.
    //     //most common use: API call to get data I need to correctly display
    //
    //     setTimeout(() => {
    //         this.setState({
    //             isLoading: false
    //         })
    //     }, 1500)
    //
    //
    //     this.setState({
    //         loadingCharacter: true
    //     })
    //     fetch("https://swapi.co/api/people/13")
    //         .then(response => response.json())
    //         .then(speciesData => {
    //             this.setState({
    //                 species: speciesData,
    //                 loadingCharacter: false
    //             })
    //         })
    // }


    render(){
        // console.log("data in state?...", this.state.species);
        const todosArr = this.state.todos.map(function(item){
                    return <TodoItem key = {item.id} item={item} />
                })

        return (
            <div className="App">
                <div className="TodoContainer">
                    <h1>Mila's Todo List</h1>
                    {todosArr}
                </div>
            </div>
        );
    }
}

export default App;
