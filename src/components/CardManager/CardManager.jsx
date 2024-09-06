import Card from "../Card/Card.jsx";
import PropTypes from "prop-types";
import Fuse from 'fuse.js';
import './CardManager.css';

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
    const results = fuse.search(searchValue).map(result => result.item);
    const toShow = searchValue ? results : data;

    const groupByCategory = (items) => {
        return items.reduce((groups, item) => {
            const category = item.category;
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(item);
            return groups;
        }, {});
    };

    const categorizedData = groupByCategory(toShow);

    return (
        <div className="container-fluid p-0 py-2 m-0 secondary-bg shadow-nbs rounded-3">
            {searchValue && toShow.length === 0 &&
                <div className="text-lighter text-center my-3">
                    {` No results found for '${searchValue}'`}
                </div>
            }
            {Object.keys(categorizedData).map(category => (
                <div key={category} className="px-3 rounded-3">
                    <h3 className="p-0 mb-2 category-header fs-4 text-lighter">
                        {category}
                    </h3>
                    <div className="row">
                        {categorizedData[category].map(item => (
                            <div className="mb-3 col-12 col-md-4 col-xl-3 col-xxl-2" key={item.id}>
                                <Card help={item.help}
                                      link={item.link}
                                      shortDescription={item.shortDescription}
                                      imageAlt={item.imageAlt}
                                      imageUrl={item.imageUrl}
                                      linkText={item.linkText}/>
                            </div>
                        ))}
                    </div>
                    {category !== Object.keys(categorizedData)[Object.keys(categorizedData).length - 1] &&
                        <hr className=""/>
                    }
                </div>
            ))}
        </div>
    );
}


CardManager.propTypes = {
    data: PropTypes.array,
    searchValue: PropTypes.string
};

export default CardManager;