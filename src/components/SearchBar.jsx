import { useState } from "react";

// Come back and figure this out
function SearchBar({onSearch}) {
	const [searchTerm, setSearchTerm] = useState("")

	function handleSubmit(e) {
		e.preventDefault();
		console.log('Search Term:', searchTerm);
		onSearch(searchTerm);
	}

	return (
		<form className="d-flex" onSubmit={handleSubmit}>
			<input className="form-control me-2" type="text"
			value={searchTerm}
			placeholder="Search for books"
			onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</form>
	)

}

export default SearchBar;