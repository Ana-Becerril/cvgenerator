import React, {useState} from 'react';
import Form from '../Form';
import CV from '../CV';
import Header from '../Header'

const Routes = () => {
  const [checked, setChecked] = useState(false);

  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [currentRoleValue, setCurrentRoleValue] = useState("");


  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };


  const valueChange = (fn,e) => {
    fn(e.target.value);
};

  
  return (
    <>
      <Header
        checked={checked}
        handleChange={handleChange}
         />
      {(checked) ? 
      (<> <CV 
      firstNameValue={firstNameValue}
      onFirstName={(e) => valueChange(e, setFirstNameValue)} 
      lastNameValue={lastNameValue}
      onLastName={(e) => valueChange(e, setLastNameValue)} 
      currentRoleValue={currentRoleValue}
      onCurrentRoleValue={(e) => valueChange(e, setCurrentRoleValue)} 
      /> </>) :
      (<> <Form   
      firstNameValue={firstNameValue}
      onFirstName={(e) => valueChange(e, setFirstNameValue)} 
      lastNameValue={lastNameValue}
      onLastName={(e) => valueChange(e, setLastNameValue)} 
      currentRoleValue={currentRoleValue}
      onCurrentRoleValue={(e) => valueChange(e, setCurrentRoleValue)} 
      /> </>)
      }
  </>
);
};




export default Routes;

