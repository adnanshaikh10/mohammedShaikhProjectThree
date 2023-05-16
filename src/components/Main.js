import { useState } from "react";
import React from "react";
import CatSection from "./CatSection";
import DogSection from "./DogSection";

const Main = () => {

    const [choseAnimal, setChoseAnimal] = useState("");

    const handleAnimalClick = (event) => {
        const animal = (event.target.innerText);
        setChoseAnimal(animal);
    }
    return (
        <main>
            <div className="choosePet">
                <div className="catTeam">
                    <img src="http://placekitten.com/275/300" alt="Nala the cat"></img>
                    <button onClick={handleAnimalClick}>CATS</button>
                </div>
                <div className="dogTeam">
                    <img src="http://placedog.net/275/300" alt="Nyx the dog"></img>
                    <button onClick={handleAnimalClick}>DOGS</button>
                </div>
            </div>
            {
                choseAnimal === "DOGS"
                    ? <DogSection />
                    : null
            }
            {
                choseAnimal === "CATS"
                    ? <CatSection />
                    : null
            }
        </main>
    )
}
export default Main;