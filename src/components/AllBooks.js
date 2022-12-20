import react, { useState, useEffect } from 'react'; 
import Book from './Book'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AllBooks.css'

const AllBooks = () => {

const [ books, setBooks ] = useState([]);

useEffect(() => {
  fetch("http://localhost:3000/books")
  .then(response => response.json())
  .then(data => setBooks(data))
}, [])




  return (
    <div className="grid">
      {books.map(book => {
        return (
        <div className="item">
          <Book book={book}/>
        </div>
        )
      })}
    </div>
  )
}

export default AllBooks; 