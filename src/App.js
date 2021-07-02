import React, { useState } from 'react';
import Form from './containers/Form';
import CV from './containers/CV';
import Header from './containers/Header'

const App = () => {
  const [datos, setDatos] = useState({
    firstname: '',
    lastname: '',
    role: '',
    address: '',
    email: '',
    phone: '',
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
    university: '',
    cityEducation: '',
    degree: '',
    subject: '',
    fromEducatiom: '',
    toEducation: ''
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
    }

  return (
    <>
      <Header />
      <Form
        handleInputChange={setDatos} />
      <CV 
      datos={datos} />
    </>
  );
};

export default App;