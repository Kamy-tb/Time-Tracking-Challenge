import img from '../images/icon-exercise.svg'


function CardDashboard(props) {
  const data = props.data
  const buttonClicked = props.buttonClicked
  console.log(`../images/${data.imagePath}`)
  console.log(`color :${data.color}`)
  //const imagePath = require(`../images/${data.imagePath}`);
  return (
    <div className={`card w-60 shadow-xl ${data.color}`}>
      <img className='w-8 h-8 ml-auto' src={"/images/" + data.imagePath} alt=" image" />
      <div className="card-body text-white bg-dark-blue rounded-2xl">
        <div className="flex justify-between items-center">
          <p >{data.title}</p>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
            </button>
        </div>
        <p className="text-3xl"> {data.timeframes[buttonClicked].current} hrs</p>
        <p className="text-xs">Last Week - {data.timeframes[buttonClicked].previous} hrs</p>
        
      </div>
    </div>
   );
}

export default  CardDashboard;

      
