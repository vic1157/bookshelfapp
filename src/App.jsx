import { useState, useEffect, useCallback } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {  } from 'react'
import BookList from './components/BookList'
import GBooklist from './components/GBookList'
import fetchBooks from './services/api-client'


function App() {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState('Java');
	const [loading, setLoading] = useState(false);

	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			const items = await fetchBooks(searchTerm);
			setBooks(items);
		} catch(error) {
			if (error.name !== 'AbortError') {
				console.log("Failed to fetch books:", error)
			}
		} finally {
			setLoading(false);
		}
	}, [searchTerm])

	useEffect(() => {
		console.log('BOOKS::', books)
	}, [books]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);
	
	
	function handleSearch(query) {
		setSearchTerm(query);
		console.log('Updated Term:', searchTerm)
	}
	
	return (
		<>
			<NavBar onSearch={handleSearch} />
			{loading ? <GBooklist/> : <BookList books={books} />}
			<Footer />
		</>
  	)
}

export default App;
