import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { name, image, id, description } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                {
                    description.length > 200 ?
                        <p>{description.slice(0, 200)} <Link to={`/service/${id}`} className='text-sm font-semibold text-lime-500'>Read more....</Link></p>
                        : <p> {description}</p>
                }

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object
}