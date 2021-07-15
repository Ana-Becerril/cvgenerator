import React from 'react';
import styles from '../App.module.css'

const Experience = (handleTest, datos) => {

    // useEffect(() => {
    //     console.log(datos.position)
    // }, [datos])

return(
    <>
         <div className={styles.experienceContainer}>
          <form onSubmit={e => e.preventDefault}>
            <h1>Experience</h1>
            <input
              type="text"
              placeholder="Position"
              onChange={handleTest('position')}
              name="position"
              dato={datos.position}
            />
            <input
              type="text"
              placeholder="Company"
              onChange={handleTest}
              name="company"
              dato={datos.company}
            />
            <input
              type="text"
              placeholder="From"
              onChange={handleTest}
              name="from"
              dato={datos.from}
            />
            <input
              type="text"
              placeholder="To"
              onChange={handleTest}
              name="to"
              dato={datos.to}
            />
            <input
              type="text"
              placeholder="Main activity/activities"
              onChange={handleTest}
              name="activity"
              dato={datos.activity}
            />
            <input
              type="text"
              placeholder="Main achievement/achievements"
              onChange={handleTest}
              name="achievement"
              dato={datos.achivement}
            />
            <button>
              Add
            </button>
            <button>
              Delete
            </button>
          </form>
          </div>
    </>

)};

export default Experience;