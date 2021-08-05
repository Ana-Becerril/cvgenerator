import React, {useState} from 'react';
import styles from '../App.module.css'

const Personal = ({ handleInputChange, datos }) => {

  const [file, setFile] = useState("")

  const fileSelector = (e) => {
    setFile(e.target.files);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=(e)=>{
      console.log(e.target.result)
    }
  };

  // function readImage(file) {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload=(e)=>{
  //     console.log(e.target.result)
  //   }
  // }

    return (
        <>
        <div className={styles.headerNameContainer}>
          <form action="/action_page.php">
            <h1>Personal Information</h1>
            <label for="img">Select image profile:</label>
            <input 
            type="file" 
            name="file"   
            id="img" 
            accept="image/*" 
            onChange={(e)=>fileSelector(e)}></input>
            <img src="" height="200" alt="Image preview..."></img>
            {/* <button type="button" onClick={()=>readImage(file)}>Submit</button> */}

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