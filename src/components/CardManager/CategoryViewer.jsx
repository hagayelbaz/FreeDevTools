import Card from "../Card/Card.jsx";
import PropTypes from "prop-types";


const CategoryViewer = ({data, categories}) => {

    return (
        <>
            {Object.keys(data).map(category => (
                categories[category] && (
                    <div key={category} className="px-3 rounded-3">
                        <h3 className="p-0 mb-2 category-header fs-4 text-lighter">
                            {category}
                        </h3>
                        <div className="row">
                            {data[category].map((item, i) => (
                                <div className="mb-3 col-12 col-md-4 col-xl-3 col-xxl-2" key={i}>
                                    <Card {...item} />
                                </div>
                            ))}
                        </div>
                        {category !== Object.keys(data)[Object.keys(data).length - 1] &&
                            <hr className="" key={category + "hr"} />
                        }
                    </div>
                )
            ))}
        </>
    )
}

CategoryViewer.propTypes = {
    data: PropTypes.object,
    categories: PropTypes.object,
}

export default CategoryViewer;