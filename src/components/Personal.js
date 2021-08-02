import React  from 'react';
import styles from '../App.module.css'
import { useForm } from "react-hook-form";

const Personal = ({handleInputChange, datos}) => {

    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    };


    return (
        <>
        <div className={styles.headerNameContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Personal Information</h1>
            <input
              type="file"
              name="picture"
              {...register("picture", {
                required: "Required",
              })}
              />
            <button>Submit</button>
            <input
              type="text"
              placeholder="First Name"
              onChange={handleInputChange}
              name="firstName"
              datos={datos.firstName}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleInputChange}
              name="lastName"
              datos={datos.lastName}

            />
            <input
              type="text"
              placeholder="Role"
              onChange={handleInputChange}
              name="role"
              datos={datos.role}

            />
            <input
              type="text"
              placeholder="Address"
              onChange={handleInputChange}
              name="address"
              datos={datos.address}

            />
            <input
              type="email"
              placeholder="Email"
              onChange={handleInputChange}
              name="email"
              datos={datos.email}

            />
            <input
              type="text"
              placeholder="Phone"
              onChange={handleInputChange}
              name="phone"
              datos={datos.phone}

            />
            <input
              type="text"
              placeholder="LinkedIn"
              onChange={handleInputChange}
              name="linkedin"
              datos={datos.linkedin}
            />
          </form>
        </div>
        </>

    )
};

export default Personal;