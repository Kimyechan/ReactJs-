import React, { Component } from 'react';
// import logo from './logo.svg';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     subject:{title:'WEB', sub:"World Wide Web"},
     contents:[
       {id:1, title:'HTML', decs:"HTML is for information"},
       {id:1, title:'CSS', decs:"CSS is for design"},
       {id:1, title:'JavaScript', decs:"JavaScript is for interactive"}
     ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" decs="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
