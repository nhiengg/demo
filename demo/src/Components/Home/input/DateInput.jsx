import React from 'react'
import '../../css/home/dateInput.css'


const DateInput = ({label}) => { 
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="date" className="date-control" />
    </div>
  )
}

export default DateInput;
