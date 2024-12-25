import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
	const [books, setBooks] = useState([]);
	const [searchTerm, setSearchTerm] = useState('Python');

	useEffect(() => {
		console.log('BOOKS::', books);
	}, [books])

	useEffect(() => {
		fetchBooks();
	}, [searchTerm]);
	
	const fetchBooks = async () => {
		const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
		const data = await res.json();
		setBooks(data.items || []);
	}

	function handleSearch(query) {
		setSearchTerm(query);
		console.log('Updated Term:', searchTerm)
	}
	
	return (
		<>
			<NavBar onSearch={handleSearch} />
			<Footer />
		</>
  	)
}

export default App;
