import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {  } from 'react'
import BookList from './components/BookList'
import GBooklist from './components/GBookList'
import useBooks from './services/useBooks'


function App() {
	const { books, loading, setSearchTerm } = useBooks('Python');
	
	function handleSearch(query) {
		setSearchTerm(query);
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
