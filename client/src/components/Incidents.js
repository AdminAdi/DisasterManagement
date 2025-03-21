import React, { useState } from "react";

const Divisions = ["Delhi", "Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu", "Gujarat"];

const Districts = {
    "Delhi": ["Central Delhi", "South Delhi", "North Delhi"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
    "Karnataka": ["Bangalore Urban", "Mysuru", "Mangaluru"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara"]
};

const LocationSelector = () => {
    const [selectedDivision, setSelectedDivision] = useState("Delhi");
    const [selectedDistrict, setSelectedDistrict] = useState(Districts["Delhi"][0]);

    const handleDivisionChange = (event) => {
        const newDivision = event.target.value;
        setSelectedDivision(newDivision);
        setSelectedDistrict(Districts[newDivision][0]); // Default first district
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    return (
        <div>
            <label htmlFor="division">Select State: </label>
            <select id="division" value={selectedDivision} onChange={handleDivisionChange}>
                {Divisions.map((division, index) => (
                    <option key={index} value={division}>{division}</option>
                ))}
            </select>

            <label htmlFor="district"> Select District: </label>
            <select id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                {Districts[selectedDivision].map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                ))}
            </select>

            <p>Selected State: {selectedDivision}</p>
            <p>Selected District: {selectedDistrict}</p>
        </div>
    );
};

export default LocationSelector;
