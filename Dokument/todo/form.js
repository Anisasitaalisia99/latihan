import Reactimportimport { render } from "react-dom";
 { Component } from "react";
//class komponen
class fromtodo extends Component{
  constructor {prompt}{
    super(prompt);
    this state ={
      todo: ""
    };
  }
  onchangeInput(e) {
    e.persist();
    this.setState({
      todo:e.target.value
    });
  }
  onsubmit (){
    this.props.submittodo(this.state.todo);
    this.setState({
      todo:""
    });
  }
  render() {
    return (
      <div>
        <input>
        </input>
      </div>
    )
  }
}
 {Component}