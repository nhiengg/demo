import React from 'react'
import '../../css/home/searchInput.css'

const SearchInput = ({label}) => { 
    return (
      <div className="form-group">
        <label>{label}</label>
        <input type="text" className="search-control" placeholder='nhập thông tin tìm kiếm'/>
      </div>
    )
  }

export default SearchInput;