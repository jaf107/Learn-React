import React, {Component} from 'react';
import Book from './components/Book';
import './App.css';

// JSX

// Functional Component
/* function App() {
  return (  
    <div className="App">
      <h1>Book List</h1>
      <Book bookName = "1984" writer="George Orwell"/>
      <Book bookName = "A song of Ice and Fire" writer="George RR Martin"/>
      <Book bookName = "Himu" writer="Humayun Ahmed"/>
    </div> 
  );

}
 */

// Class Component
class App extends Component{
  // State
  state = {
    books: [
      {bookName: "1984", writer: "George Orwell"},
      {bookName: "Da Vinci Code", writer: "Dan Bronw"},
      {bookName: "A song of Ice & Fire ", writer: "George RR Martin"}
    ],
    otherPro: "I am some Other prop"
  }
   
  changeBookState = (newBookName) =>{
    this.setState({
      books: [
        {bookName: newBookName, writer: "I got no Clue"},
        {bookName: "Da Vinci Code", writer: "Dan Bronw"},
        {bookName: "A song of Ice & Fire ", writer: "George RR Martin"}
      ]
    });
  }

  changeWithInputState = (event) =>{
    this.setState({
      books: [
        {bookName: event.target.value, writer: "I got no Clue"},
        {bookName: "Da Vinci Code", writer: "Dan Bronw"},
        {bookName: "A song of Ice & Fire ", writer: "George RR Martin"}
      ]
    });
  }

  render(){
    return (  
      <div className="App">
         <h1>Book List</h1>
         <button onClick={this.changeBookState.bind(this, "Girl on the Train")} >Change State </button>
         <input type="text" onChange={this.changeWithInputState} />

         <Book 
          bookName = {this.state.books[0].bookName} 
          writer={this.state.books[0].writer}
          inputName = {this.changeWithInputState} />
         <Book 
          bookName = {this.state.books[1].bookName} 
          writer={this.state.books[1].writer} />
         <Book 
          bookName = {this.state.books[2].bookName} 
          writer={this.state.books[2].writer}
          change ={this.changeBookState}
          />
      </div> 
    );
  } 
}

export default App;
