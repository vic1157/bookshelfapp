import { useState, useEffect, useCallback } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {  } from 'react'
import BookList from './components/BookList'

function App() {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState('Java');


	const fetchBooks = useCallback(async () => {
		const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
		const data = await res.json();
		setBooks(data.items || []);
	}, [searchTerm])

	useEffect(() => {
		console.log('BOOKS::', books)
	}, [books]);

	useEffect(() => {
		fetchBooks();
	}, [fetchBooks]);
	
	
	function handleSearch(query) {
		setSearchTerm(query);
		console.log('Updated Term:', searchTerm)
	}
	
	return (
		<>
			<NavBar onSearch={handleSearch} />
			<BookList books={books} />
			<Footer />
		</>
  	)
}

export default App;
