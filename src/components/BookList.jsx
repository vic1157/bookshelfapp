import BookCard from "./BookCard";
import PropTypes from 'prop-types';

function BookList({books}) {

	return (
		
		<div className="row">
			{books.map( (book) => (
				<BookCard key={book.id} book={book}/>
				 //<p key={book.id}> {book.volumeInfo.title} </p> 
			))}
		</div>
	)
}

// Add PropTypes validation
BookList.propTypes = {
	books: PropTypes.arrayOf(
	  PropTypes.shape({
		id: PropTypes.string.isRequired,
		// Add other book properties you expect
	  })
	).isRequired
  };

export default BookList;