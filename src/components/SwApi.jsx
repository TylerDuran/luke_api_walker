import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

const SwApi = (props) => {

    const [responseObj, setResponseObj] = useState(null);

    const navigate = useNavigate()

    const { personID, selectedStar } = useParams();
    console.log(personID);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${selectedStar}/${personID}`)
            .then(res => {
                console.log(res.data);
                setResponseObj(res.data);
            })
            .catch( err => {
                console.log(err)
                navigate("/error", {replace: true})
            })
    }, [selectedStar, personID])



    return (
        <div>
            {
                selectedStar === "people" ? (
                    responseObj ? (
                        <>
                            <h3>{responseObj.name}</h3>
                            <p>Height: {responseObj.height}cm</p>
                            <p>Mass: {responseObj.mass}kg</p>
                            <p>Hair Color: {responseObj.hair_color}</p>
                            <p>Skin Color: {responseObj.skin_color}</p>
                        </>) : "loading..")
                    : (
                        responseObj ? (
                            <>
                                <h3>{responseObj.name}</h3>
                                <p>Climate: {responseObj.climate}</p>
                                <p>Terrain: {responseObj.terrain}</p>
                                <p>Surface Water: {responseObj.surface_water}</p>
                                <p>Population: {responseObj.population}</p>
                            </>
                        ) : "loading")
            }
        </div>
    )
}

export default SwApi