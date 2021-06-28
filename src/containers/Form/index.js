import React, {useState} from 'react';
import styles from './style.module.css';

const Form = () => {

  const [data, setData] = useState("");
  const [datas, setDatas] = useState([]);

  const handleChange = e => {
    setData({ text: e.target.value});
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    const datasClone=[...datas];
    datasClone.push(data)
    setDatas(datasClone);
    setData({ text: '' }) 
    console.log(datasClone)
  };

  return (
  <>
    <div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <h2>Personal Information</h2>
          <form onSubmit={onSubmitData}>
           
            <button type="submit">
              Add 
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default Form;