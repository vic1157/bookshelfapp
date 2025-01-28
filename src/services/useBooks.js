import { useEffect, useState } from "react";
import fetchBooks from "./api-client";

function useBooks(initialQuery) {
	// Leveraging the states of books, searchTerm & loading
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState(initialQuery);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchBooksData(query) {
			setLoading(true)
			try {
				const items = await fetchBooks(query);
				setBooks(items);
			} catch(error) {
				if (error !== 'AbortError') {
					console.error('Faile to fetch books:', error)
				}
			} finally {
				setLoading(false)
			}
		}

		if (searchTerm) {
			fetchBooksData(searchTerm)
		}

	}, [searchTerm]);

	return { books, loading, setSearchTerm }
}

export default useBooks;