import './style.css';
function Cards(){
    return(
        <div>
        <div className="card1">
            <p className='blue'>World</p>
            <h1>Featured Post</h1>
           <p>Nov 12 <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
           Necessitatibus animi quae voluptates veniam quos.</p>
           <p className='blue'>Continue reading</p>
        </div>
        <div className="card2">
         <p className='green'>World</p>
         <h1>Post litle</h1>
        <p>Nov 13 <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Necessitatibus animi quae voluptates veniam quos.</p>
        <p className='blue'>Continue reading</p>
        </div>
        <div id='clear'></div>
        </div>
    )
}

export default Cards;