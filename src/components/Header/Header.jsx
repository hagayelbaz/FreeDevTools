import Search from "../Search/Search.jsx";
import About from "../About/About.jsx";
import {useState} from "react";
import PropTypes from "prop-types";
import GitHubIcon from "../../assets/svg/github.svg?react";
import {Nav, Navbar} from "react-bootstrap";


const Header = ({searchValue, setSearchValue}) => {
    const [aboutShow, setAboutShow] = useState(false);

    const searchChange = (e) => {
        setSearchValue(e.target.value);
    }

    const showAbout = () => {
        setAboutShow(true);
    }

    return (
        <Navbar expand="md" className="col m-3 shadow-nbs secondary-bg rounded-3">
            <div className="container-fluid">
                <div className="row align-items-center w-100">
                    <div className="col">
                        <div className="col-md-7 col-lg-6 col-xxl-5">
                            <Search name="search" maxLength={20}
                                    example="Cow" className="my-3" value={searchValue}
                                    onChange={searchChange} placeholder="search"/>
                        </div>
                    </div>
                    <div className="col-auto">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    </div>
                    <div className="col-md-auto">
                        <Navbar.Collapse>
                            <Nav className="ms-auto align-items-start">
                                <hr className="d-md-none p-0 m-1 secondary-bg-light w-100"/>
                                <a href="https://www.github.com/hagayelbaz" className="mx-3 my-2 my-md-0"
                                   target="_blank">
                                    <GitHubIcon className="fs-2 accent-color"/>
                                </a>
                                <hr className="d-md-none p-0 m-1 secondary-bg-light w-100"/>
                                <button className="accent-color button-no-style font-500 fs-4 mx-2 my-2 my-md-0"
                                        onClick={showAbout}>
                                    About
                                </button>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </div>
            </div>
            <About show={aboutShow} setShow={setAboutShow}/>
        </Navbar>


    )
}

Header.defaultProps = {
    searchValue: "",
    setSearchValue: () => {
    },
    setAboutShow: () => {
    }
}

Header.propTypes = {
    searchValue: PropTypes.string,
    setSearchValue: PropTypes.func,
    setAboutShow: PropTypes.func
}
export default Header;