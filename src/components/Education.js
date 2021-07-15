import React from 'react';

const Education = () => {
    const [datos, setDatos] = useState({
        university: '',
        cityEducation: '',
        degree: '',
        subject: '',
        fromEducation: '',
        toEducation: ''
    });

    const handleInputChange = (event) => {
        setDatos({
          ...datos,
          [event.target.name]: event.target.value
        })
      }

    <>
        <div>Education</div>
    </>

};

export default Education;
