// API KEY =
// live_j29E1vec9gYqx9oyno1sprzIEcYTs7Vwh8DXzyUR9qRYl1M6E57JzcveakP1JCbh
import { useState } from "react";
import React from "react";
import AnimalInfo from "./AnimalInfo";

const CatSection = () => {

    const [catInfo, setCatInfo] = useState("");

    // have it so when person clicks on the learn more, the new component of animalInfo shows up.

    const handleInfoClick = (event) => {
        const infoButton = (event.target.innerText);

        setCatInfo(infoButton);
    }



    fetch('https://api.thecatapi.com/v1/breeds')
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            const catData = (data);
            console.log(catData);
        })


    return (
        <div className="catSection">
            <form>
                <label htmlFor="catsBreed">Choose a Breed:</label>
                <select name="catsBreed" id="catsBreed">
                    <option value="beng">Bengal</option>
                </select>
            </form>
            <img src="http://placekitten.com/280/300" alt="a cat" />
            <button onClick={handleInfoClick}>LEARN MORE</button>
            {
                catInfo === "LEARN MORE"
                    ? <AnimalInfo />
                    : null
            }
        </div>

    )
}
export default CatSection;