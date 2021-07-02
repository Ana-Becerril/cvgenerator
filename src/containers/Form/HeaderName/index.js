import React from "react";

const HeaderName = ({setDatos}) => {


    return (
        <>
            <form onSubmit={e => e.preventDefault}>
            <h1>Personal Information</h1>
                <input 
                    type="text"
                    placeholder="First Name"
                    onChange={}
                    name="firstName" 
                
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleInputChange}
                    name="lastName"
                
                />
                <input
                    type="text"
                    placeholder="Role"
                    onChange={handleInputChange}
                    name="role"
                
                />
                <input
                    type="text"
                    placeholder="Address"
                    onChange={handleInputChange}
                    name="address"
                
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    name="email"
                    
                />
                <input
                    type="text"
                    placeholder="Phone"
                    onChange={handleInputChange}
                    name="phone"
                
                />
            </form>

        </>
    );
};

export default HeaderName;