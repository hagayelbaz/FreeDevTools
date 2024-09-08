import QuestionIcon from '../../assets/svg/question.svg?react';
import Help from "../Help/Help.jsx";
import PropTypes from "prop-types";
import './Card.css';

const Card = ({description, link, linkText, shortDescription, imageUrl, imageAlt}) => {


    return (
        <div className="container-fluid text-color item-card rounded-3 secondary-bg p-2">
            <div className="row text-center mt-0 flex-grow-1">
                <div className="col d-flex flex-column justify-content-between">
                    <div>
                        <Help className="position-absolute top-0 start-0 m-2" text={description}>
                            <QuestionIcon className="fs-3"/>
                        </Help>
                        <img src={imageUrl} alt={imageAlt} className="img-fluid m-3 mb-4"/>
                    </div>
                    <div>
                        <a href={link} target="_blank" className="fs-5 font-500">
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
    description: PropTypes.string,
    link: PropTypes.string,
    shortDescription: PropTypes.string,
    linkText: PropTypes.string,
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string
};

export default Card;