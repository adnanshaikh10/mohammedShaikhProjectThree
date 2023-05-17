import { useState } from "react";
import React from "react";
import CatSection from "./CatSection";
import DogSection from "./DogSection";
import CatImage from "../assets/CatImage.jpeg";
import DogImage from "../assets/DogImage.jpg";

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
                    <img src= {CatImage} alt="Archie"></img>
                    <button onClick={handleAnimalClick}>CATS</button>
                </div>
                <div className="dogTeam">
                    <img src={DogImage} alt="Nyx"></img>
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