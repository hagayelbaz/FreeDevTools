import QuestionIcon from '../../assets/svg/question.svg?react';
import Help from "../Help/Help.jsx";
import PropTypes from "prop-types";
import './Card.css';

const Card = ({help, link, linkText, shortDescription, imageUrl, imageAlt}) => {

    return (
        <div
            className="container-fluid text-color card-nbs rounded-3 secondary-bg p-2 h-100 position-relative d-flex flex-column">
            <div className="row text-center mt-0 flex-grow-1">
                <div className="col d-flex flex-column justify-content-between">
                    <div>
                        <Help className="position-absolute top-0 start-0 m-2" text={help}>
                            <QuestionIcon className="fs-3"/>
                        </Help>
                        <img src={imageUrl} alt={imageAlt}
                             className="img-fluid m-3 mb-4" style={{width: '80px', height: '80px'}}/>
                    </div>
                    <div>
                        <a href={link} target="_blank"
                           className="d-block fs-5 accent-color font-500">
                            {linkText}
                        </a>
                        <p className="px-1 mt-1">
                            {shortDescription}
                        </p>
                    </div>
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