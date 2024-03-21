import React, { useEffect, useState } from 'react'
import '../../css/home/selectInput.css'

const SelectInput = ({label,array}) => {
  const [arrayInput,setarrayInput] = useState([])
  useEffect(()=>{
    if(arrayInput) {
      setarrayInput(array)
    }
  },[arrayInput])
  return (
    <div className="form-group">
      <label>{label}</label>
      <select className='form-select'>{
        arrayInput.map (
          (option , index) => {
            return <option key={index}>{option}</option>
          }
        )
      }
      </select>
    </div>
  )
}

export default SelectInput;