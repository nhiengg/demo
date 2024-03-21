import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/login/login.css'
import { CiUser } from "react-icons/ci";
import { MdKey } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import logo from "../assets/image/logo.png"

const LoginForm = () => {
  let navigate = useNavigate()
  const login = () =>{
      navigate('dashboard',{replace:true})
    }
  return (
      <div className="row-lg vh-100">
        <div className='wrapper col-lg-3'>
          <form action="">
            <div className="header">
              <div className='logo'>
                <img src={logo} alt="" />
              </div>
              <div className='text'>
                <h2>Đăng nhập</h2>
                <h3>để tiếp tục với Digins</h3>
              </div>
            </div>
            <div className="input-box">
              <p>Tài khoản</p>
              <CiUser className='icon'/>
              <input 
                className='username'
                type="text" 
                placeholder="username" 
              />
            </div>
            <div className="input-box">
              <p>Mật khẩu</p>
              <MdKey className='icon'/>
              <input 
                className='password'
                type="password" 
                placeholder="password" 
                
              />
            </div>
            <div className="remember-forgot">
              <input type="checkbox" /><label><b>Nhớ mật khẩu</b></label>
              <FaLock className='icon'/><a href="#">Quên mật khẩu ?</a>
            </div>
            <div className="login">
              <button onClick={login}>Đăng Nhập</button>
            </div>
            <div className='support'>
              <h1 className='text'>Bạn chưa có tài khoản ?</h1>
              <h2 className='text'>liên hệ ngay</h2>
              <button>tổng đài hỗ trợ</button>
            </div>
          </form>
        </div>
        <div className="col-lg-9">
            <div className="background">
              <div className='content'>
                <img src={logo} alt="" />
                <div className='getStarted'>
                  <h4 >Chào mừng đến với Digins</h4>
                  <div class="border"></div>
                  <h1 >Bắt đầu thôi!</h1>
                  <p >Bạn chưa có tài khoản?<a href=""> Đăng ký</a></p>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}
export default LoginForm;

