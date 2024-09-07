import Search from "../../Search/Search.jsx";
import PropTypes from "prop-types";


const SearchBar = ({ searchValue, setSearchValue }) => {
    const searchChange = (e) => setSearchValue(e.target.value);

    return (
        <div className="col">
            <div className="col-md-7 col-lg-6 col-xxl-5">
                <Search name="search" maxLength={20}
                        example="Cow" className="my-3" value={searchValue}
                        onChange={searchChange} placeholder="search"/>
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    searchValue: PropTypes.string.isRequired,
    setSearchValue: PropTypes.func.isRequired,
}

export default SearchBar;