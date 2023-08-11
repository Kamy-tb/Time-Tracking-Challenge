import data from '../data.json'
import CardDashboard from './CardDashboard';
import CardProfile from './CardProfile';

function Dashboard() {
    
    return (
        <div className="flex justify-stretch justify-evenly align-middle">
            <CardProfile />
            <div className="container flex justify-evenly align-middle">
                <div className="flex flex-wrap gap-7">
                {data.map((card, index) => (
                <div key={index} >
                    <CardDashboard  title={card.title} content={card.timeframes} />
                </div>
                ))}
                </div>
            </div>
        </div>
   );
}

export default  Dashboard;
