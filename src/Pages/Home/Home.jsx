import { useLoaderData } from 'react-router-dom';
import sliderPhoto from '../../assets/slider.png'
import ServiceCard from '../ServiceCard';



const Home = () => {

    const services = useLoaderData();
    console.log(services);

    

    return (
        <>
            <div className="flex justify-around items-center">
                <h2 className='text-lg font-medium text-teal-800 px-3'>
                    Embrace the journey to well-being. At Health & Wellness, we curate experiences that nourish the body, inspire the mind, and uplift the spirit. Join us on a path to holistic living and unforgettable moments.
                </h2>
                <div>
                    <img src={sliderPhoto} alt="sliderPhoto" />
                </div>
            </div>
            <hr className="border-2 border-teal-600 mb-10 rounded-lg w-3/4 mx-auto" />

            {/* service container */}
            <h2 className="text-2xl font-bold text-center text-zinc-950 mb-8">Event Services</h2>
            <div className='flex justify-evenly'>


                <div className='grid grid-cols-1 space-y-4 lg:grid-cols-2 gap-5'>
                    {
                        services.map(service => <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>
                        )}
                </div>
            </div>
        </>
    );
};

export default Home;