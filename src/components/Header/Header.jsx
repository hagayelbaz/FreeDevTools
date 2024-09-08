import About from "../About/About.jsx";
import {useState} from "react";
import PropTypes from "prop-types";
import {Navbar} from "react-bootstrap";
import SearchBar from "./SearchBar/SearchBar.jsx";
import NavigationToggle from "./NavigationToggle/NavigationToggle.jsx";
import HeaderLinks from "./HeaderLinks/HeaderLinks.jsx";

const Header = ({searchValue, setSearchValue}) => {
    const [aboutShow, setAboutShow] = useState(false);

    return (
        <Navbar expand="md" className="col m-3 shadow-nbs secondary-bg rounded-3">
            <div className="container-fluid">
                <div className="row align-items-center w-100">
                    <a href="/" className="col-auto mx-0 pe-0">
                        <img src="logo.svg" alt="logo" style={{width: "3rem"}}/>
                    </a>
                    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <NavigationToggle/>
                    <HeaderLinks showAbout={() => setAboutShow(true)}/>
                </div>
            </div>
            <About show={aboutShow} setShow={setAboutShow}/>
        </Navbar>


    )
}

Header.propTypes = {
    searchValue: PropTypes.string,
    setSearchValue: PropTypes.func
}
export default Header;