import QuestionIcon from '../../assets/svg/question.svg?react';
import Help from "../Help/Help.jsx";
import PropTypes from "prop-types";

const Card = ({help, link, linkText, shortDescription, imageUrl, imageAlt}) => {

    return (
        <div className="container-fluid shadow rounded-3 h-100 text-color position-relative">
            <div className="row text-center">
                <div className="col">
                    <Help className="position-absolute top-0 start-0 m-1" text={help}>
                        <QuestionIcon className="fs-4"/>
                    </Help>
                    <img src={imageUrl} alt={imageAlt}
                         className="img-fluid m-3" style={{width: '50px', height: '50px'}}/>
                    <a href={link} target="_blank" className="d-block">
                        {linkText}
                    </a>
                    <p>
                        {shortDescription}
                    </p>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    help: PropTypes.string,
    link: PropTypes.string,
    shortDescription: PropTypes.string,
    linkText: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string
};

export default Card;