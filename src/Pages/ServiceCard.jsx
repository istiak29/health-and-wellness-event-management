import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



const ServiceCard = ({ service }) => {

    const {  title, image, id, description, category, price } = service;
    console.log(title)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div data-aos="fade-right">
            <div className="card card-compact w-96 bg-slate-100 shadow-lg px-2">
                <h2 className="card-title text-2xl font-bold text-zinc-950 pl-3">{title}</h2>

                <figure className='mt-4'><img className='rounded-lg' src={image} alt="" /></figure>

                <div className="card-actions justify-start mt-3 ml-3">
                    <button className="btn btn-outline btn-accent">{category}</button>
                </div>

                

                <div className="card-body">
                    
                    
                    <div className="text-center justify-end border-2 border-teal-500 rounded-lg mt-3 mr-3 w-20">
                        <span>{price}</span>
                    </div>

                    {
                        description.length > 200 ?
                            <p>{description.slice(0, 200)} <Link to={`/service/${id}`} className='text-sm font-semibold text-lime-500'>Read more....</Link></p>
                            : <p> {description}</p>
                    }

                    

                    <div className="card-actions justify-end">
                        <button className='btn btn-success'>
                            <Link to={`/service/${id}`}>Details</Link>
                        </button>
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