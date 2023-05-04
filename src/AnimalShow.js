import "./AnimalShow.css";
import { useState } from "react";
import bird from "./svgg/bird.svg";
import cat from "./svgg/cat.svg";
import cow from "./svgg/cow.svg";
import dog from "./svgg/dog.svg";
import gator from "./svgg/gator.svg";
import heart from "./svgg/heart.svg";
import horse from "./svgg/horse.svg";

const svgMap ={
    bird, cat, cow, dog, gator, horse};


function AnimalShow({ type}) {
    const [clicks, setClicks] = useState(0);

     const handleClick= ()=>{
        setClicks(clicks +1);
        
     };

    return (
    <div className="animal-show" onClick={handleClick}>
        <img className="animal" alt="animal" src={svgMap[type]} />
        <img className="heart"
        alt="heart" 
        src={heart}
        style={{ width: 10 + 10* clicks+ "px"}} />
    </div>
    );
}

export default AnimalShow;