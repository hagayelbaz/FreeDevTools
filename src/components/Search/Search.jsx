import './Search.css';
import {useState} from "react";
import SearchIcon from '../../assets/svg/search.svg?react';
import PropTypes from "prop-types";


const Search = ({placeholder = "Search", value, onChange, example, maxLength, className}) => {
    const getPlaceHolder = () => {
        return `${placeholder} ${example ? `: e.g., ${example}` : ''}`;
    }
    const [placeHolderText, setPlaceHolderText] = useState(getPlaceHolder());


    const handleFocus = () => {
        setPlaceHolderText(placeholder);
    }

    const handleBlur = () => {
        if (value === "")
            setPlaceHolderText(getPlaceHolder());
    }

    return (
        <div className={`custom-input-container ${className}`}>
            {value === "" && <SearchIcon className="custom-input-icon"/>}

            <input type="search" placeholder=" "
                   value={value} onChange={onChange}
                   className="text-color custom-input" required={false}
                   onFocus={handleFocus} onBlur={handleBlur} maxLength={maxLength}/>

            <label htmlFor={""} className="custom-input-label">
                {placeHolderText ? placeHolderText : ''}
            </label>
        </div>
    );
}

Search.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    icon: PropTypes.elementType,
    example: PropTypes.string,
    maxLength: PropTypes.number,
    className: PropTypes.string
};

export default Search;