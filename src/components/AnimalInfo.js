const AnimalInfo = (images) => {
    console.log(images);
    return(
        <>
         <div className="animalInfo">
            <h3> {images.breedArray[0].breeds[0].name} : ID </h3>
        </div>
        <div className="thanksMessage">
            <p>Thank you for using my API App!</p>
            <p>Try clicking a different breed!?!</p>
        </div>
        </>
    )
}
export default AnimalInfo;