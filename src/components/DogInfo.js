const DogInfo = ({ infoArray }) => {

    if (infoArray.breeds[0]) {
        return (
            <>
                <div className="animalInfo">
                    <h3>{infoArray.breeds[0].name} : {infoArray.breeds[0].id} </h3>
                    <p>Breeding Job: {infoArray.breeds[0].bred_for}</p>
                    <p className="capitals">{infoArray.breeds[0].temperament}</p>
                    <p>{infoArray.breeds[0].origin} </p>
                    <p>{infoArray.breeds[0].weight.imperial} Pounds / {infoArray.breeds[0].weight.metric} Kilograms</p>
                    <p>{infoArray.breeds[0].life_span} - average life span</p>
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
export default DogInfo;