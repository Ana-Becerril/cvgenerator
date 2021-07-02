import React from "react";

const Experience = ({ handleInputChange }) => {


    return (
        <>
            <form onSubmit={e => e.preventDefault}>

                <h1>Experience</h1>
                <input
                    type="text"
                    placeholder="Position"
                    onChange={(e) => handleInputChange(e)}
                    name="position"
                />
                <input
                    type="text"
                    placeholder="Company"
                    onChange={(e) => handleInputChange(e)}
                    name="company"
                />
                <input
                    type="text"
                    placeholder="City"
                    onChange={(e) => handleInputChange(e)}
                    name="city"
                />
                <input
                    type="text"
                    placeholder="From"
                    onChange={(e) => handleInputChange(e)}
                    name="from"
                />
                <input
                    type="text"
                    placeholder="To"
                    onChange={(e) => handleInputChange(e)}
                    name="to"
                />

                <button>
                    Add
                </button>
                <button>
                    Delete
                </button>

            </form>
            {/* <ul>
                <li>{datos.firstName}</li>
                <li>{datos.lastName}</li>
                <li>{datos.role}</li>
                <li>{datos.address}</li>
                <li>{datos.email}</li>
                <li>{datos.phone}</li>
            </ul> */}

        </>
    );
};

export default Experience;