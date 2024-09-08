import PropTypes from "prop-types";
import './CardManager.css';
import SearchManager from "./SearchManager.js";
import CategoryViewer from "./CategoryViewer.jsx";



const CardManager = ({ data, searchValue, categories}) => {
    const searchManager = new SearchManager(data);
    const toShow = searchManager.search(searchValue || "");
    const filteredData = searchManager.groupByCategory(toShow || data);

    return (
        <div className="container-fluid p-0 py-2 m-0 secondary-bg shadow-nbs rounded-3">
            {
                <div className="text-lighter text-center my-3">
                    {searchValue && toShow.length > 0 && ` Showing ${toShow.length} results for '${searchValue}'`}
                    {searchValue && toShow.length === 0 && ` No results found for '${searchValue}'`}
                </div>
            }
            <CategoryViewer data={filteredData} categories={categories}/>
        </div>
    );
}


CardManager.propTypes = {
    data: PropTypes.array,
    searchValue: PropTypes.string,
    categories: PropTypes.object,
};

export default CardManager;