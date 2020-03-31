import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form"; 

const API_KEY =  "ohYTG5FhOerPWRBpSo8eQ";
const APP_SECRET  = "QbJ5aMfH7ndA2OJNsDN08OXLzp23CfwPvhpplXOJmY"; 

class App extends Component {


getBook= async (e)=> {
  const  bookName = e.target.elements.bookName.value;
  e.preventDefault(); 
  const api_call = await fetch (`https://www.goodreads.com/search.xml?key=&{API_KEY}&secret=&{APP_SECRET}&q=Ender%27s+Game`);
  const data= await api_call.json();
  console.log(data); 
}

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Stay Home And Read a Book</h1>
      </header>
      <Form getBook={this.getBook}/>
    </div>
  );
}
}
export default App;
