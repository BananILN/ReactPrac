import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { getRandomHexColor, getRandomElementOfArray } from "./utils";
import { API_URL } from "./api";


export default function Character  ()  {
    const [visibility, setVisibility] = useState(true);

    if (!visibility) {
        return null;
    }

 

    return (
        <AppCharacters setVisibility={setVisibility} />
    );
}



 function AppCharacters({ setVisibility }) {
    const intervalRef = useRef(undefined);
    const [hero, setHero] = useState({ name: 'undefined' });
    const randColor = getRandomHexColor();


    useEffect(() => {
        console.log("Component Mount");
        getRandomHero();

        intervalRef.current = setInterval(() => {
            getRandomHero();
        }, 3000);

        return () => {
            console.log("Component: UnMount");
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        console.log("Component: Render");
    });

    const getRandomHero = () => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                const hero = data.results;
                const randomHero = getRandomElementOfArray(hero);
                setHero({ name: randomHero.name });
            });
    }

    const getRandomHeroHandler = () => {
        getRandomHero();
    }

    const hideComponentHandler = () => {
        setVisibility(false);
    }

    return (
        <>
            <button onClick={hideComponentHandler}> Hide component</button>
            <h2 className="Character" style={{ backgroundColor: randColor }}>
                Character: {hero.name}
            </h2>
            <button onClick={getRandomHeroHandler}> Get Random Hero</button>
        </>
    );
}