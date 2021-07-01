import React, { useState } from "react";
import Input from "../../components/Input/Input";

const Personal = () => {
    const [addressValue, setAddressValue] = useState();
    const [phoneValue, setPhoneValue] = useState();
    const [mailValue, setMailValue] = useState();
    
    const handleChange = (fn,e) => {
        fn(e.target.value);
    };

    return (
        <>
            <Input
                onChange={(e) => handleChange(setAddressValue,e)}
                placeholder="Address"
                value={addressValue} />
            <Input
                onChange={(e) => handleChange(setPhoneValue,e)}
                placeholder="Phone Number"
                value={phoneValue} />
            <Input
                onChange={(e) => handleChange(setMailValue,e)}
                placeholder="Email"
                value={mailValue} />
        </>
    );
};

export default Personal;
