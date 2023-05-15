import { useEffect, useState } from "react";
import React from "react";
import CatInfo from "./CatInfo";
import axios from "axios";

const CatSection = () => {

    const [catInfo, setCatInfo] = useState("");

    const [breeds, setBreeds] = useState([]);

    const [images, setImages] = useState([])

    useEffect(()=>{
        axios({
            url: 'https://api.thecatapi.com/v1/breeds',
            params: {
                api_key: "live_j29E1vec9gYqx9oyno1sprzIEcYTs7Vwh8DXzyUR9qRYl1M6E57JzcveakP1JCbh"
            }
        }).then((response)=>{
            const breedArray = (response.data)
            setBreeds(breedArray);
        })
    },[]);

    useEffect(()=>{
        getAnimalImages('abys');
    },[])

    const getAnimalImages = (animalID) => {
        axios({
            url: "https://api.thecatapi.com/v1/images/search",
            params:{
                api_key: "live_j29E1vec9gYqx9oyno1sprzIEcYTs7Vwh8DXzyUR9qRYl1M6E57JzcveakP1JCbh",
                breed_ids: animalID,
            }
            
        }).then((response)=>{
            const image = (response.data)
            setImages(image);
        })
    }

    const handleInfoClick = (event) => {
        const infoButton = (event.target.innerText);

        setCatInfo(infoButton);
    }
    const handleChange =  (event) => {
         getAnimalImages(event.target.value);          
    }

    return (
        <div className="catSection">
            <form onChange={handleChange}>
                <label htmlFor="catsBreed">Choose a Breed:</label>
                <select name="catsBreed" id="catsBreed">
                    {breeds.map((breed)=>{
                        return(
                            <option key={breed.name} value={breed.id} id={breed.reference_image_id}>{breed.name}</option>
                        )
                    })}
                </select>
            </form>
                {images.map((image)=>{
                    return(
                        <img key={image.id} id={image.id} src={image.url} alt={image.breeds[0].name} />
                        )
                    })
                }
            
            <button onClick={handleInfoClick}>LEARN MORE</button>
            {
                catInfo === "LEARN MORE"
                    ? <CatInfo 
                       infoArray = {images}
                    /> 
                    : null
            }
        </div>
    )
}
export default CatSection;