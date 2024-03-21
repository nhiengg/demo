import React, { useEffect, useState } from 'react'
import '../css/home/tabledashboard.css'

const DashboardTable = ({tableArray}) => {
  const [arrayTable,setArrayTable] = useState([])
  
  useEffect(() =>{
    if(arrayTable) {
      setArrayTable(tableArray)
    }
  },[arrayTable])
  return (
    <div className='table-responsive'>
        <table className='table'>
            <thead>
                <tr>
                    <th className='th-table-head'>STT</th>
                    <th className='th-table-head'>Ngày tạo</th>
                    <th className='th-table-head'>Số hợp đồng</th>
                    <th className='th-table-head'>Tên khách hàng</th>
                    <th className='th-table-head'>Phí</th>
                    <th className='th-table-head'>Trạng thái</th>
                    <th className='th-table-head'>Hiệu lực</th>
                    <th className='th-table-head'>Hành động</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                {
                  arrayTable.map((item,index) => {
                    return <th key={index} className='th-table-body'>{item}</th>
                  })
                }
              </tr>
              <tr>
                {
                  arrayTable.map((item,index) => {
                    return <th key={index} className='th-table-body'>{item}</th>
                  })
                }
              </tr>
              <tr>
                {
                  arrayTable.map((item,index) => {
                    return <th key={index} className='th-table-body'>{item}</th>
                  })
                }
              </tr>
              <tr>
                {
                  arrayTable.map((item,index) => {
                    return <th key={index} className='th-table-body'>{item}</th>
                  })
                }
              </tr>
              <tr>
                {
                  arrayTable.map((item,index) => {
                    return <th key={index} className='th-table-body'>{item}</th>
                  })
                }
              </tr>
              <tr>
                {
                  arrayTable.map((item,index) => {
                    return <th key={index} className='th-table-body'>{item}</th>
                  })
                }
              </tr>
            </tbody>
        </table>
    </div>
  )
}

export default DashboardTable;