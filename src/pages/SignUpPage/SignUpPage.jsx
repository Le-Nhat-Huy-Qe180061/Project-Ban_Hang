import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextlight } from './style'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo-login.png';
import { useNavigate } from 'react-router-dom'


const SignUpPage = () => {

  const [isShowPassword, setIsShowPassword] = useState(false);

  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const navigate = useNavigate();

  const handleNavigateSignUp = () => {
    navigate('/sign-in');
  }

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  }
  const handleOnchangePassword = (value) => {
    setPassword(value);
  }
  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  }

  const handleSignUp = () => {
    console.log(email, password, confirmPassword);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgb(0,0,0,0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>

          <h1>Hello</h1>
          <p>Login or create account</p>

          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />

          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}>
              {isShowPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
            </span>
            <InputForm
              onChange={handleOnchangePassword}
              value = {password}
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
              style={{
                marginBottom: '10px'
              }}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}>
              {isShowConfirmPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
            </span>
            <InputForm
             onChange={handleOnchangeConfirmPassword}
             value= {confirmPassword}
              placeholder="Confirm password"
              type={isShowConfirmPassword ? "text" : "password"} />
          </div>

          <ButtonComponent
            // bordered={false}
            disabled={!email.length || !password.length || !confirmPassword}
            onClick={handleSignUp}
            size={20}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '410px',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Create'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          >
          </ButtonComponent>
          <p>You have account ? <WrapperTextlight onClick={handleNavigateSignUp} style={{ cursor: 'pointer' }}>Login</WrapperTextlight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} alt='Logo' preview={false} height='203px' width='203px' />
          <h4>By at ShopHuyDev</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage