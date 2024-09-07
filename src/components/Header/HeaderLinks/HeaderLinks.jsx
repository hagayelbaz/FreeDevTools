
import GitHubIcon from "../../../assets/svg/github.svg?react";
import {Nav, Navbar} from "react-bootstrap";
import PropTypes from "prop-types";


const HeaderLinks = ({ showAbout }) => (
    <div className="col-md-auto">
        <Navbar.Collapse>
            <Nav className="ms-auto align-items-start">
                <hr className="d-md-none p-0 m-1 secondary-bg-light w-100"/>
                <a href="https://www.github.com/hagayelbaz" className="mx-3 my-2 my-md-0" target="_blank">
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
);

HeaderLinks.propTypes = {
    showAbout: PropTypes.func.isRequired,
};

export default HeaderLinks;
