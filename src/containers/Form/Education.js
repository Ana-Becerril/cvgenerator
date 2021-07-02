import React from "react";

const Education = ({ handleInputChange }) => {

    return (
        <>
            <form onSubmit={e => e.preventDefault}>

                <h1>Education</h1>

                <input
                    type="text"
                    placeholder="University Name"
                    onChange={handleInputChange}
                    name="university" />
                <input
                    type="text"
                    placeholder="City"
                    onChange={handleInputChange}
                    name="cityEducation"
                />
                <input
                    type="text"
                    placeholder="Degree"
                    onChange={handleInputChange}
                    name="degree"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    onChange={handleInputChange}
                    name="subject"
                />
                <input
                    type="text"
                    placeholder="From"
                    onChange={handleInputChange}
                    name="fromEducatiom"
                />
                <input
                    type="text"
                    placeholder="To"
                    onChange={handleInputChange}
                    name="toEducation"
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


export default Education;
