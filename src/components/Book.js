import react from "react"; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Book = ({ book }) => {

  return (

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.author}
        </Card.Text>
        <Card.Text>
          {book.genre}
        </Card.Text>
        <Button variant="primary">Favorite this book</Button>
      </Card.Body>
    </Card>

  )
}

export default Book; 