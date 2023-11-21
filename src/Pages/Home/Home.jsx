import { Link, useLoaderData } from 'react-router-dom';
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


                <div className='grid grid-cols-1 mt-4 lg:grid-cols-2 gap-6'>
                    {
                        services.map(service => <ServiceCard
                            key={service.id}
                            service={service}
                        ></ServiceCard>
                        )}
                </div>
            </div>
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/gD3tJvh/6.jpg")' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello, Wellness Enthusiast</h1>
                            <p className="mb-5">Experience the transformative power of health and wellness with our personalized approach.</p>
                            <button className='btn btn-success'>
                                <Link to={'/pastEvents'}>See Events</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;