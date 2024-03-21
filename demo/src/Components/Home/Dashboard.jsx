import React from 'react'
import '../css/home/dashboard.css'
import avatar from '../assets/image/user-1.jpg'
import DateInput from './input/DateInput.jsx'
import SelectInput from './input/SelectInput.jsx'
import SearchInput from './input/SearchInput.jsx'
import DashboardTable from '../Table/DashboardTable.jsx'
import { FaCircle , FaUser , FaDesktop , FaAngleRight , FaSearch , FaCheckDouble } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5"; 
import { RiShutDownLine } from "react-icons/ri"; 
import { PiNotepad } from "react-icons/pi";

const Dashboard = () => {
  let status = ['Tất cả','Hoàn thành hợp đồng','Đang thanh toán','Thanh toán thành công','Hủy hợp đồng','Chờ cấp đơn']
  let contract = ['Tất cả','CP_02/02/2024_11112-00000219','CP_02/02/2024_11112-00000218','CP_02/02/2024_11112-00000216','CP_02/02/2024_11112-00000212','CP_02/02/2024_11112-00000209']
  let info = ['1','21/03/2024 09:54	','Thông báo sau','Công ty cổ phần HAPACO','3.300.000 VND','Chờ cấp đơn','18/03/2024 : 18/03/2024']
  return (
    <div className="vh-100">
      {/* thanh menu */}
      <header>
        <div className="menu">
          <div className="user-setting">
            <img src={avatar} alt="user" className='avatar' />
            <span className='online-icon'>
              <FaCircle />
            </span>
            <div className="setting-body">
              <h5>Nguyễn Văn A</h5>
              <ul className="list-setting">
                <li className="list-item ">
                  <a href="" className='icon ma-icon'><FaUser /></a>
                </li>
                <li className="list-item ">
                  <a href="" className='icon ma-icon'><IoSettingsSharp /></a>
                </li>
                <li className="list-item ">
                  <a href="" className='icon mb-icon'><RiShutDownLine /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="page-title-box">
                <h4 className='page-title'><FaDesktop className='mc-icon' />Dashboard</h4>
                <div className="breadcrumb">
                  <ol className='breadcrumb-list'>
                    <li className="breadcrumb-item ">
                      <a href="">Digins</a>
                    </li>
                    <li className="breadcrumb-item appendix">
                      <a href=""><FaAngleRight className='angle'/>Home</a>
                    </li>
                    <li className="breadcrumb-item active appendix">
                      <FaAngleRight className='angle'/>Dashboard
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* trang thông tin */}
      <div className="page-wrapper">
        {/* thanh menu trái */}
        <div className="side-left">
          <ul className="side-menu">
            <li className="info">THÔNG TIN CHUNG</li>
            <li className="list-info">
              <a href="" className='icon mc-icon'><span><FaDesktop className='mc-icon'/>Dashboards</span></a>
            </li>
            <li className="list-info">
              <a href="" className='icon mc-icon'><span><PiNotepad className='mc-icon' />Đơn BH hàng hóa</span></a>
            </li>
            <li className="list-info">
              <a href="" className='icon mc-icon'><span><PiNotepad className='mc-icon'/>Hợp đồng bao/nguyên tắc</span></a>
            </li>
            <li className="list-info">
              <a href="" className='icon mc-icon'><span><PiNotepad className='mc-icon' />Đối soát và báo cáo</span></a>
            </li>
          </ul>
        </div>
        {/* content */}
        <div className="page-content ">
          <div className="container-fluid">
            <div className="row">
                  <div className="body-table">
                    <h4 className="header-title ">Danh sách các chuyến hàng</h4>
                    <div className="row form-option">
                          <div className="col-md-2">
                            <DateInput 
                              label = "Ngày bắt đầu" 
                            />
                          </div>
                          <div className="col-md-2">
                            <DateInput 
                              label = "Ngày kết thúc" 
                            />
                          </div>
                          <div className="col-md-3">
                            <SelectInput
                              label = "Trạng thái"
                              array = {status}
                            />
                          </div>
                          <div className="col-md-3">
                            <SelectInput
                              label = "Hợp đồng bao/Nguyên tắc"
                              array = {contract}
                            />
                          </div>
                          <div className="col-md-2">
                            <SearchInput 
                              label = "Tìm kiếm" 
                            />
                          </div>
                          <div className="btn col-md-3">
                            <div className="btn-success">
                              <button><FaSearch className='md-icon'/>Tìm kiếm</button>
                            </div>
                            <div className="btn-success">
                              <button><FaCheckDouble className='md-icon'/>Thêm mới</button>
                            </div>
                          </div>
                    </div>
                    <div>
                      <DashboardTable
                        tableArray={info}
                      />
                    </div>
                    <div className="paginations"></div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard;