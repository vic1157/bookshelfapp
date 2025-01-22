import PropTypes from 'prop-types';

function BookCard({ book }) {
	const imageUrl = book?.volumeInfo?.imageLinks?.thumbnail || '/api/placeholder/128/192';
	const authors = book?.volumeInfo?.authors?.join(", ") || '';
	
	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<img className="card-img-top" 
					src={imageUrl}
					alt={book.volumeInfo.title}
				/>
				<div className="card-body">
					<h5 className="card-title">{book.volumeInfo.title}</h5>
					<p className="card-text"> {authors}</p>
					<button href="" className="btn btn-primary"> See More </button>
				</div>
			</div>
		</div>
	)
}


// Add detailed PropTypes validation
BookCard.propTypes = {
	book: PropTypes.shape({
	  volumeInfo: PropTypes.shape({
		imageLinks: PropTypes.shape({
		  smallThumbnail: PropTypes.string,
		  thumbnail: PropTypes.string  // URL for the book thumbnail
		}),
		title: PropTypes.string,
		authors: PropTypes.arrayOf(PropTypes.string)  // Array of author names
	  }).isRequired
	}).isRequired
  };

export default BookCard;