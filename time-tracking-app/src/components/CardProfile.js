
import profile from '../images/image-jeremy.png';
function CardProfile() {
    return (
        <div className="card bg-dark-blue shadow-xl ">
            <div className=" card h-2/3 bg-desaturated-blue">
                <div className="border-3 mt-4 ml-4 mb-8 rounded-full overflow-hidden w-16 h-16 mr-4">
                    <img src={profile} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="ml-4 text-sm ">Report for</p>
                <p className="ml-4 text-white text-2xl mb-16">Jeremy Roberson</p>
            </div>
            <button className="text-left px-4 mt-4 text-desaturated-blue">Daily</button>
            <button className="text-left px-4 mt-1 mb-1 text-white" >Weekly</button>
            <button className="text-left px-4 mb-4 text-desaturated-blue">Monthly</button>
        </div>
    );
}

export default  CardProfile;
