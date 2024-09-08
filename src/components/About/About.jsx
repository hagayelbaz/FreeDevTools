import PropTypes from "prop-types";
import {Modal} from "react-bootstrap";
import './About.css';


const About = ({show, setShow}) => {

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget)
            setShow(false);
    }

    return (
        <Modal show={show} centered onHide={() => setShow(false)} onClick={handleOutsideClick}>
                <Modal.Header closeButton closeVariant="white" className="text-color">
                    <Modal.Title>About</Modal.Title>
                </Modal.Header>
            <Modal.Body className="text-color">
                <p>
                    Welcome to <span className="accent-color"> Free Dev Tools </span>, your go-to resource for free
                    development tools and assets. This application
                    is designed to help developers enhance their projects by providing easy access to a wide array of
                    resources, all in one convenient location.
                </p>
                <p>
                    Features include:
                    <ul>
                        <li>Extensive collection of free images perfect for any project.</li>
                        <li>A variety of fonts to enhance the aesthetic of your applications.</li>
                        <li>Customizable icons to add visual interest and clarity to your user interfaces.</li>
                        <li>Selection of pre-designed backgrounds to give your projects a professional look.</li>
                        <li>Handpicked code editors known for their efficiency and effectiveness.</li>
                    </ul>
                </p>
                <p>
                    <span className="accent-color"> Free Dev Tools </span> is ideal for developers at all levels, from beginners to experienced professionals,
                    looking to streamline their workflow and enrich their applications with high-quality assets. Explore
                    our site to find the perfect tools to elevate your development process.
                </p>

                <p className="text-center mt-5 mb-1">
                    Created by &nbsp;
                    <a href="https://www.hagay-elbaz.com" target="_blank">
                        Hagay Elbaz
                    </a>
                </p>
            </Modal.Body>
        </Modal>
    )
}

About.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func
}

export default About;