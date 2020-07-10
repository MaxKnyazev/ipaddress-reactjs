import React from 'react';
import classes from './Spinner.module.css'

const Spinner = () => {
  return (
    <div>
      <div className = {classes.loadingSpinner}>
        <div className = {classes.ldio}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner;








