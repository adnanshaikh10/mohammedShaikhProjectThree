const CatInfo = (images) => {

    if (images.infoArray[0]) {
        return (
            <>
                <div className="animalInfo">
                    <h3> {images.infoArray[0].breeds[0].name} : {images.infoArray[0].breeds[0].id} </h3>
                    <p>{images.infoArray[0].breeds[0].description}</p>
                    <p>{images.infoArray[0].breeds[0].temperament}</p>
                    <p>{images.infoArray[0].breeds[0].origin}</p>
                    <p>{images.infoArray[0].breeds[0].weight.imperial} Pounds / {images.infoArray[0].breeds[0].weight.metric} Kilograms</p>
                    <p>{images.infoArray[0].breeds[0].life_span} Years - Average life span</p>
                </div>
                <div className="thanksMessage">
                <p>Thank you for using my API App! -Try clicking a different breed!?!</p>
                </div>
            </>
        )
    } else {
        return (
            <div>
                <p>Sorry the API doesn't have information on that!</p>
            </div>
        )
    }
}
export default CatInfo;