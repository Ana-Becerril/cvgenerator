import React from 'react';
import styles from '../App.module.css'

const Personal = ({ handleInputChange, datos, setFiles }) => {

  function previewFile() {
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      setFiles(reader.result);
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setFiles("");
    }
  }


    return (
        <>
        <div className={styles.headerNameContainer}>
          <form>
            <label for="img">Select a profile picture:</label> 
            <input 
            type="file" 
            accept=".jpg, .jpeg, .png" 
            onChange={previewFile}

            />
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