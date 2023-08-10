
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//{timeframes.daily.current}
//<p className="text-xl"> {timeframes.daily.current} hrs</p>
//<p className="text-xs">Last Week - {timeframes.daily.current} hrs</p>
function CardDashboard({ title, timeframes }) {
  console.log('title :' + timeframes.daily.current)
  return (
    <div className="card w-25 shadow-xl bg-yellow-500 ">
      <figure>
        <img src="path_to_your_image.jpg" alt=" image" />
      </figure>
      <div className="card-body text-white bg-primary rounded-2xl">
        <div className="flex justify-between items-center">
          <p >{title}</p>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
            </button>
        </div>
        <p className="text-xl">  hrs</p>
        <p className="text-xs">Last Week - ----- hrs</p>
        
      </div>
    </div>
   );
}

export default  CardDashboard;

      
