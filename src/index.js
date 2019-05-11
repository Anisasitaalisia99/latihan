import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormtTodo from "./components/todo/form";
import ListTodo from "./components/todo/list";
import ItemTodo from "./components/todo/item";
import "./styles.css";

class App extends Component{
  constructor(props){
    super(props);
    this.state ={

    };
      
  
  }
}
submitTodo(val) {
  const {todos}=this
  return (
    <div className="App">
      <h1>Todo App</h1>
      <formTodo submitTodo={val=> this.submitTodo(val)}

<h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
