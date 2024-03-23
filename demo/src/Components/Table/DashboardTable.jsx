import React, { useEffect, useState } from 'react'
import '../css/home/tabledashboard.css'
import { FaPencil } from "react-icons/fa6";

const DashboardTable = ({tableArray}) => {
  const [arrayTable,setArrayTable] = useState([])
  
  useEffect(() =>{
    if(arrayTable) {
      setArrayTable(tableArray)
    }
  },[arrayTable])
  console.log(arrayTable);
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
              <tr className='tr-hover'>
                {
                  arrayTable.map((item,index) => {
                      if (item == '') {
                        return <th className='th-table-body'><button className='btn-action'><FaPencil /></button></th>
                      }
                      else {
                        return<React.Fragment>
                                <th key={index} className='th-table-body'>{item}</th>
                              </React.Fragment> 
                      }       
                  })
                }
              </tr>
            </tbody>
        </table>
    </div>
  )
}

export default DashboardTable;