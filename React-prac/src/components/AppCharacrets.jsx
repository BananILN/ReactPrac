import { useState } from "react";
import "./styles.css"
import { getRandomHexColor, getRandomElementOfArray } from "./utils"
import {API_URL} from "./api"

export default function AppCharacters(){
    const [hero, setHero] = useState({name:'undefined'})
    const randColor = getRandomHexColor();
    
    const getRandomHeroHandler = () =>{
        fetch(API_URL)
        .then((response) => response.json())
        .then((data)=>{
            const hero = data.results;
            const randomHero = getRandomElementOfArray(hero);
            setHero({name: randomHero.name})
        })
    }
    
    
    return (
        <>
            <h2 className="Character" style={{ backgroundColor: randColor}}>
                Character: {hero.name}
            </h2>
            <button onClick={getRandomHeroHandler}> Get Random Hero</button>
        </>
    )
}