import { useState, useEffect } from "react";
import React from "react";
import DogInfo from "./DogInfo";
import axios from "axios";

const DogSection = () => {

    const [dogInfo, setDogInfo] = useState("");

    const [breeds, setBreeds] = useState([]);

    const [images, setImages] = useState([]);

    useEffect(()=>{
        axios({
            url: "https://api.thedogapi.com/v1/breeds",
            params: {
                api_key: "live_j29E1vec9gYqx9oyno1sprzIEcYTs7Vwh8DXzyUR9qRYl1M6E57JzcveakP1JCbh"
            }
        }).then((response) => {
            const breedArray = (response.data)
            setBreeds(breedArray);
        })
    },[])

    useEffect(()=>{
        getAnimalImages("BJa4kxc4X")
    },[])

    const getAnimalImages = (animalId) => {
        axios({
            url: `https://api.thedogapi.com/v1/images/${animalId}`,
            params: {
                api_key: "live_j29E1vec9gYqx9oyno1sprzIEcYTs7Vwh8DXzyUR9qRYl1M6E57JzcveakP1JCbh",
            }
            
        }).then((response)=> {
            const image = (response.data);
            setImages(image);
        })
    }

    const handleInfoClick = (event) => {
        const infoButton = (event.target.innerText);
        setDogInfo(infoButton);
    }

    const handleChange = (event) => {
        getAnimalImages(event.target.value);
    }

    return (
        <section className="dogSection">
            <form onChange={handleChange}>
                <label htmlFor="dogsBreed">Choose a Breed:</label>
                <select name="dogsBreed" id="dogsBreed">
                    {breeds.map((breed)=>{
                        return(
                            <option key={breed.name} id={breed.id} value={breed.reference_image_id}>{breed.name}</option>
                        )
                    })
                    }
                  
                </select>
            </form>
                    {/* {imageArray.map((animalInfo)=>{
                        return(
                           
                        )
                    })} */}
           
                    <img key={images.id} src={images.url} alt={images.breeds ?
                    images.breeds[0].name : ""} />

            <button onClick={handleInfoClick}>LEARN MORE</button>
            {
                dogInfo === "LEARN MORE"
                    ? <DogInfo className="aboutAnimal" 
                    infoArray= {images}
                    />
                    : null
            }
        </section>
    )
}
export default DogSection;