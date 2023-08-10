import data from '../data.json'
import CardDashboard from './CardDashboard';

function Dashboard() {
    
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap -mx-4">
                {data.map((card, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
                    <CardDashboard title={card.title} content={card.timeframes} />
                </div>
                ))}
            </div>
        </div>
   );
}

export default  Dashboard;
