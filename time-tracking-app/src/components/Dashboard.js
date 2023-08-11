import data from '../data.json'
import CardDashboard from './CardDashboard';
import CardProfile from './CardProfile';

function Dashboard() {
    
    return (
        <div className="flex justify-stretch">
            <CardProfile className="w-56"/>
            <div className="container">
                <div className="flex flex-wrap justify-center align-center">
                {data.map((card, index) => (
                <div key={index} className="w-56  ">
                    <CardDashboard title={card.title} content={card.timeframes} />
                </div>
                ))}
                </div>
            </div>
        </div>
   );
}

export default  Dashboard;
