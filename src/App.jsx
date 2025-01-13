import { useState, useEffect, useCallback } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {  } from 'react'
import BookList from './components/BookList'
import GBooklist from './components/GBookList'

function App() {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState('Java');
	const [loading, setLoading] = useState(false);


	const fetchBooks = useCallback(async () => {
		setLoading(true);
		const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
		const data = await res.json();
		setBooks(data.items || []);
		setLoading(false);
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
			{loading ? <GBooklist/> : <BookList books={books} />}
			<Footer />
		</>
  	)
}

export default App;
