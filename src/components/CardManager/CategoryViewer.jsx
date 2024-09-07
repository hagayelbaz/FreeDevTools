import Card from "../Card/Card.jsx";
import PropTypes from "prop-types";


const CategoryViewer = ({categories}) => {

    return (
        <>
            {Object.keys(categories).map(category => (
                <div key={category} className="px-3 rounded-3">
                    <h3 className="p-0 mb-2 category-header fs-4 text-lighter">
                        {category}
                    </h3>
                    <div className="row">
                        {categories[category].map(item => (
                            <div className="mb-3 col-12 col-md-4 col-xl-3 col-xxl-2" key={item.id}>
                                <Card {...item} />
                            </div>
                        ))}
                    </div>
                    {category !== Object.keys(categories)[Object.keys(categories).length - 1] &&
                        <hr className=""/>
                    }
                </div>
            ))}
        </>
    )
}

CategoryViewer.propTypes = {
    categories: PropTypes.array
}

export default CategoryViewer;