import Card from "../Card/Card.jsx";
import PropTypes from "prop-types";
import Fuse from 'fuse.js';


const fuseOptions = {
    keys: [
        { name: "tags", weight: 0.2 },
        { name: "shortDescription", weight: 0.65 },
        { name: "linkText", weight: 0.15 }
    ],
    includeScore: true,
    threshold: 0.3,
    ignoreLocation: true,
};

const CardManager = ({ data, searchValue }) => {


    const fuse = new Fuse(data, fuseOptions);

    const results = fuse.search(searchValue)
        .map(result => result.item);

    const toShow = searchValue ? results : data;

    return (
        <div className="container-fluid text-color">
            <div className="row">
                {toShow.map((item) => {
                    return (
                       <div className="col-4" key={item.id}>
                           <Card help={item.help}
                                 link={item.link}
                                 shortDescription={item.shortDescription}
                                 imageAlt={item.imageAlt}
                                 imageUrl={item.imageUrl}
                                 linkText={item.linkText}/>
                       </div>
                    );
                })}
            </div>
        </div>
    );

}

CardManager.propTypes = {
    data: PropTypes.array,
    searchValue: PropTypes.string
};

export default CardManager;