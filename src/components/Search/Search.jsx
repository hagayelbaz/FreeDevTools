import './Search.css';
import {useState} from "react";
import SearchIcon from '../../assets/svg/search.svg?react';
import PropTypes from "prop-types";


const Search = ({
                    placeholder = "Search", value, onChange,
                    example, maxLength, className, ...rest
                }) => {

    const [placeHolderText, setPlaceHolderText] =
        useState(`${placeholder} ${example ? `: (e.g: ${example})` : ''}`);

    const handleFocus = () => {
        setPlaceHolderText(placeholder);
    }

    const handleBlur = () => {
        if (value === "")
            setPlaceHolderText(`${placeholder} ${example ? `: (e.g: ${example})` : ''}`);
    }

    const whenChange = (event) => onChange(event);

    return (
        <div className={`custom-input-container ${className}`}>
            {value === "" && <SearchIcon className="custom-input-icon"/>}

            <input type="search"
                   placeholder=" "
                   value={value}
                   onChange={whenChange}
                   className={`text-light custom-input`}
                   required={false}
                   onFocus={handleFocus}
                   onBlur={handleBlur}
                   maxLength={maxLength}
                   {...rest}/>

            <label htmlFor={rest?.id || ""} className="custom-input-label">
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