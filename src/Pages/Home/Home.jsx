import sliderPhoto from '../../assets/slider.png'

const Home = () => {
    return (
        <div>
            <div className="flex justify-around items-center">
                <h2 className='text-lg font-medium text-teal-800 px-3'>
                    Embrace the journey to well-being. At Health & Wellness, we curate experiences that nourish the body, inspire the mind, and uplift the spirit. Join us on a path to holistic living and unforgettable moments.
                </h2>
                <div>
                    <img  src={sliderPhoto} alt="sliderPhoto" />
                </div>
            </div>
            <hr className="border-2 border-teal-600 mb-10 rounded-lg w-3/4 mx-auto" />
        </div>
    );
};

export default Home;