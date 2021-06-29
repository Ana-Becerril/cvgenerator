import React, { useState } from "react";
import Input from "../../components/Input/Input";

const Education = () => {
    const [universityValue, setUniversityValue] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [degreeValue, setDegreeValue] = useState("");
    const [subjectValue, setSubjectValue] = useState("");
    const [fromValue, setfromValue] = useState("");
    const [toValue, setToValue] = useState("");

    const handleChange = (fn,e) => {
        fn(e.target.value);
    };

    return (
        <>
            <Input
                onChange={(e) => handleChange(setUniversityValue,e)}
                placeholder="University Name"
                value={universityValue} />
            <Input
                onChange={(e) => handleChange(setCityValue,e)}
                placeholder="City"
                value={cityValue} />
            <Input
                onChange={(e) => handleChange(setDegreeValue,e)}
                placeholder="Degree"
                value={degreeValue} />
            <Input
                onChange={(e) => handleChange(setSubjectValue,e)}
                placeholder="Subject"
                value={subjectValue} />
            <Input
                onChange={(e) => handleChange(setfromValue,e)}
                placeholder="From"
                value={fromValue} />
            <Input
                onChange={(e) => handleChange(setToValue,e)}
                placeholder="To"
                value={toValue} />
        </>
    );
};

export default Education;
