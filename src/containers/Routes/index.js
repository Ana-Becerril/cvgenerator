import React, {useState} from 'react';
import Form from '../Form';
import CV from '../CV';
import Header from '../Header'



const Routes = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
  
  return(
  <>
    <Header 
    checked={checked} 
    handleChange={handleChange}/>
    {(checked)? ( <> <CV /> </> ): (<> <Form /> </>) 
    }
  </>
);
};




export default Routes;

