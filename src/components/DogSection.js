import { useState } from "react";
import React from "react";
import AnimalInfo from "./AnimalInfo";

const DogSection = () => {


    const [dogInfo, setDogInfo] = useState("");

    const handleInfoClick = (event) => {
        const infoButton = (event.target.innerText);
        
        setDogInfo(infoButton);
    }


    fetch("https://api.thedogapi.com/v1/breeds")
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            const dogData = (data)
               console.log(dogData);
        })


    return (
        <section className="dogSection">
            <form>
                <label htmlFor="dogsBreed">Choose a Breed:</label>
                <select name="dogsBreed" id="dogsBreed">
                    <option value="german">German Shepherd</option>
                </select>
            </form>
            <img src="http://placedog.net/280/300" alt="a dog" />
            <button onClick={handleInfoClick}>LEARN MORE</button>
            {
                dogInfo === "LEARN MORE"
                    ? <AnimalInfo />
                    : null
            }
        </section>
    )
}
export default DogSection;