import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Form = (props) => {

    const [personID, setPersonID] = useState(1)
    const perOrPlanet = [
        'people',
        'planets'
    ];


    const [selectedStar, setSelectedStar] = useState(perOrPlanet[0]);


    const navigate = useNavigate();

    const submitInfo = (e) => {
        e.preventDefault();
        console.log(personID);
        console.log(selectedStar);

        navigate(`/${selectedStar}/${personID}`);

    }

    return (
        <form onSubmit={submitInfo}>
            <label>Search For:</label>
            <select value={selectedStar} onChange={e => setSelectedStar(e.target.value)}>
                {perOrPlanet.map( (per, idx) => 
                    <option key={idx} value={per}>{per}</option>
                )}
            </select>
            <label>ID:</label>
            <input 
                onChange={(e) => setPersonID(e.target.value)}
                value={personID}
                type="number"
                min="1" 
            />
            <button>Search</button>
            <Outlet/>
        </form>
    )
}

export default Form