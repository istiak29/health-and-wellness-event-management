import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ServiceDetails = () => {

    const services = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="mb-12">


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

                {/* event details */}
                <div className="lg:col-span-3 space-y-5">
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <figure><img className="rounded-md" src={service.image} alt="" /></figure>
                    <p><span className="text-lg font-bold block">Description:</span></p>

                    <p className="ml-5" data-aos="zoom-out-down">
                        {service.description}
                    </p>
                    <p className="flex gap-3 items-center justify-center font-semi-bold text-lg text-lime-700" data-aos="zoom-in-right">
                        <FaLocationArrow></FaLocationArrow> <span> {service.location}</span>
                    </p>
                    <p className="font-semibold text-lg text-center" data-aos="zoom-in-right">
                        Sit for Booking: <span className="font-bold">{ service.guests }</span>
                    </p>
                </div>

                {/* Quotes */}
                <div className="hidden  lg:block items-center">
                    <h2 className="text-lg font-bold text-teal-700 mb-12" data-aos="zoom-in">Quotes you Love to hear:</h2>
                    
                    <p data-aos="fade-down-left" className="text-lg font-semi-bold mb-8"> <span>&#39;</span>Discover the path to a healthier and happier you with our holistic approach to well-being. <span>&#39;</span></p>
                    
                    <p data-aos="fade-down-left" className="text-lg font-semi-bold mb-8"> <span>&#39;</span>Experience the transformative power of mindfulness, nutrition, and fitness at our wellness retreat.<span>&#39;</span></p>
                    
                    <p data-aos="fade-down-left" className="text-lg font-semi-bold mb-8"> <span>&#39;</span>Nurture your body, mind, and spirit with our curated collection of health and wellness resources. <span>&#39;</span></p>
                    
                    <p className="text-lg font-semi-bold mb-8" data-aos="fade-down-left"> <span>&#39;</span>Unlock the secrets to optimal health and well-being with our evidence-based approaches. <span>&#39;</span></p>


                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;