import SearchBar from "./SearchBar";
import PropTypes from 'prop-types';

function NavBar ({onSearch}) {

	return (
		// Navigation Bar
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">BookShelf</a>
				<SearchBar onSearch={onSearch} />
			</div>
		</nav>
	);
}

// PropTypes validation
NavBar.propTypes = {
    // onSearch should be a function and is required
    onSearch: PropTypes.func.isRequired,
};

export default NavBar;