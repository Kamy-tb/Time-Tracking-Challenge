
import { useState } from 'react';
function CardProfile({callback}) {
    const [buttonClicked , setbuttonClicked] = useState(0)
    return (
        <div className="card w-60 bg-dark-blue border-none shadow-xl ">
            <div className=" card bg-desaturated-blue">
                <div className="border-3 mt-4 ml-4 mb-8 rounded-full overflow-hidden w-16 h-16 mr-4">
                    <img src={'/images/image-jeremy.png'} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="ml-4 text-sm ">Report for</p>
                <p className="ml-4 text-white text-2xl mb-16">Jeremy Roberson</p>
            </div>
            <button className={`text-left px-4 mt-4 ${buttonClicked === 0 ? 'text-white' : 'text-desaturated-blue'}`} onClick={()=> { setbuttonClicked(0); callback('daily')}}>Daily</button>
            <button className={`text-left px-4 mb-1 ${buttonClicked === 1 ? 'text-white' : 'text-desaturated-blue'}`} onClick={()=> { setbuttonClicked(1); callback('weekly')}}>Weekly</button>
            <button className={`text-left px-4 mb-4 ${buttonClicked === 2 ? 'text-white' : 'text-desaturated-blue'}`} onClick={()=> {setbuttonClicked(2); callback('monthly')}}>Monthly</button>
        </div>
    );
}

export default  CardProfile;
