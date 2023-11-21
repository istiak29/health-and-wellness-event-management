import moment from "moment";

const PastEvents = () => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-teal-600 mb-5">Nutrition and Weight Management</h2>
                <p className="text-lg font-bold text-green-500 my-3">{moment([2023, 1, 20]).fromNow()}</p>
                <figure><img src="https://i.ibb.co/kJ2zGXf/1.jpg" alt="" /></figure>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-teal-600 mb-5">Mindful Movement and Dance</h2>
                <p className="text-lg font-bold text-green-500 my-3">{moment([2023, 3, 20]).fromNow()}</p>
                <figure><img src="https://i.ibb.co/gSvFkxT/3.jpg" alt="" /></figure>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-teal-600 mb-5">Sleep Hygiene Workshop</h2>
                <p className="text-lg font-bold text-green-500 my-3">{moment([2023, 7, 20]).fromNow()}</p>
                <figure><img src="https://i.ibb.co/m5Mg0zh/4.jpg" alt="" /></figure>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-teal-600 mb-5">Stress Relief and Relaxation Techniques</h2>
                <p className="text-lg font-bold text-green-500 my-3">{moment([2023, 4, 20]).fromNow()}</p>
                <figure><img src="https://i.ibb.co/gD3tJvh/6.jpg" alt="" /></figure>
            </div>
        </div>
    );
};

export default PastEvents;