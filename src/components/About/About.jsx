import PropTypes from "prop-types";
import {Modal} from "react-bootstrap";
import './About.css';


const About = ({show, setShow}) => {
    if (!show) {
        return null;
    }

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            setShow(false);
        }
    }

    return (
        <Modal show={show} centered className=""
               onHide={() => setShow(false)} onClick={handleOutsideClick}>
                <Modal.Header closeButton closeVariant="white"
                              className="text-color">
                    <Modal.Title>About</Modal.Title>
                </Modal.Header>
            <Modal.Body className="text-color">
                <p>
                    Welcome to our application, a dynamic tool designed to streamline and enhance your data management
                    experience. This app leverages a robust JSON-based database to provide fast and accurate search
                    capabilities, allowing users to quickly find the information they need.
                </p>
                <p>
                    Features include:
                    <ul>
                        <li>Real-time search functionality that instantly filters results as you type.</li>
                        <li>An intuitive, user-friendly interface designed for seamless navigation and accessibility.
                        </li>
                        <li>Fully responsive design ensuring a consistent experience across all devices and platforms.
                        </li>
                    </ul>
                </p>
                <p>
                    Our application is perfect for individuals and businesses looking for an efficient way to access and
                    explore large datasets. Whether you are managing customer information, tracking inventory, or simply
                    organizing your data, our tool provides a reliable and powerful solution.
                </p>
                <p className="text-center mt-5 mb-1">
                    Created by &nbsp;
                    <a href="https://www.hagay-elbaz.com" target="_new">
                        Hagay Elbaz
                    </a>
                </p>
            </Modal.Body>
        </Modal>
    )
}

About.defaultProps = {
    show: false,
    setShow: () => {
    }
}

About.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func
}

export default About;