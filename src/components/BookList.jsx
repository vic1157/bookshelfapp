
function BookList({books}) {

	return (
		<div className="row">
			{books.map(book => (
				<p key={book.id}>{book.volumeInfo.title}</p>
			))}
		</div>
	)
}

export default BookList;