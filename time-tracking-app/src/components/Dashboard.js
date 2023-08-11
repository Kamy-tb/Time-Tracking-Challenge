import { useState } from 'react';
import data from '../data.json'
import CardDashboard from './CardDashboard';
import CardProfile from './CardProfile';

function Dashboard() {
    const [showTimeframes , setShowTimeframes] = useState('daily')
    const handleChosingClicked = (data) =>{
        setShowTimeframes(data)
    }
    return (
        <div className="flex justify-stretch justify-evenly align-middle">
            <CardProfile callback={handleChosingClicked} />
            <div className="container flex justify-evenly align-middle">
                <div className="flex flex-wrap gap-7">
                {data.map((card, index) => (
                <div key={index} >
                    <CardDashboard  data={card} buttonClicked={showTimeframes} />
                </div>
                ))}
                </div>
            </div>
        </div>
   );
}

export default  Dashboard;
