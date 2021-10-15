import React from 'react';
import '../stylesheets/Books.css';

const Book = props =>{
    return(
        <div className= "Book" > 
            <h3 onClick={props.change} > Book: {props.bookName}</h3>
            <h4> Write: {props.writer}</h4>
            <input type="text" onChange={props.inputName} value={props.bookName} />
           
        </div>
    );
}

export default Book;