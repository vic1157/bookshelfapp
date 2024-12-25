import SearchBar from "./SearchBar";

function NavBar ({onSearch}) {

	return (
		// Navigation Bar
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Bookshelf</a>
				<SearchBar onSearch={onSearch} />
			</div>
		</nav>
	);
}

export default NavBar;