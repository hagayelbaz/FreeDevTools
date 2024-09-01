import './Search.css';
import {useState} from "react";
import SearchIcon from '../../assets/svg/search.svg?react';


const Search = ({
                    placeholder = "Search", value, onChange,
                    icon: Icon, example, className, ...rest
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
            <SearchIcon className="custom-input-icon"/>

            <input type="text"
                   placeholder=" "
                   value={value}
                   onChange={whenChange}
                   className={`text-light custom-input`}
                   required={false}
                   onFocus={handleFocus}
                   onBlur={handleBlur}
                   {...rest}/>

            <label htmlFor={rest?.id || ""} className="custom-input-label">
                {placeHolderText ? placeHolderText : ''}
            </label>
        </div>
    );
}

export default Search;