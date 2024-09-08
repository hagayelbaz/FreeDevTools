import PropTypes from "prop-types";
import './Filter.css';
import ClearAllIcon from '../../assets/svg/clear-all.svg?react';
import SelectAllIcon from '../../assets/svg/select-all.svg?react';
import Help from "../Help/Help.jsx";

const Filter = ({categories, setCategories}) => {

    const toggleCategory = (category) => {
        setCategories(prev => ({
            ...prev, [category]: !prev[category]
        }));
    };

    const updateAllCategories = (value) => {
        setCategories(Object.fromEntries(
            Object.keys(categories).map(category => [category, value])));
    }

    const selectAllCategories = () => {
        updateAllCategories(true);
    }

    const clearAllCategories = () => {
        updateAllCategories(false);
    };

    return (
        <div className="container-fluid secondary-bg rounded-3 shadow-nbs p-3">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex flex-wrap align-items-center">
                        <div className="category-bar align-items-center d-flex flex-wrap">
                            <Help text="Clear all categories">
                                <ClearAllIcon className="fs-3 text-color flex-fill mx-2" role="button"
                                              onClick={clearAllCategories}/>
                            </Help>
                            <Help text="Select all categories">
                                <SelectAllIcon className="fs-3 text-color flex-fill mx-2" role="button"
                                               onClick={selectAllCategories}/>
                            </Help>
                            {Object.entries(categories).map(([category, visible]) => (
                                <button className={`button flex-fill m-1 btn ${visible ? 'accent-bg' : 'secondary-bg-light text-color'}`}
                                        key={category} onClick={() => toggleCategory(category)}>
                                    {category} {visible ? `✓` : ''}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

Filter.propTypes = {
    categories: PropTypes.object,
    setCategories: PropTypes.func,
}

export default Filter;
