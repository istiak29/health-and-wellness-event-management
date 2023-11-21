import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



const ServiceCard = ({ service }) => {

    const { name: title, image, id, description } = service;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div data-aos="fade-right">
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

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
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object
}