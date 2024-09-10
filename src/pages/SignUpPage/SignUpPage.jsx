import React, {useState} from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextlight } from './style'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo-login.png';


const SignUpPage = () => {

  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgb(0,0,0,0.53)' ,height: '100vh'}}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display:'flex' }}>
        <WrapperContainerLeft>
          <h1>Hello</h1>
          <p>Login or create account</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
          <div style={{ position: 'relative' }}>
            <span style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }}>
              {isShowPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
            </span>
            <InputForm
              placeholder="password" type={isShowPassword ? "text" : "password"} />
          </div>
          <div style={{ position: 'relative' }}>
            <span style={{
              zIndex: 10,
              position: 'absolute',
              top: '4px',
              right: '8px'
            }}>
              {isShowPassword ? (<EyeFilled />) : (<EyeInvisibleFilled />)}
            </span>
            <InputForm
              placeholder="password" type={isShowPassword ? "text" : "Confirm password"} />
          </div>
          <ButtonComponent
            bordered={false}
            size={20}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '410px',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Login'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          >
          </ButtonComponent>
          <p>You have account ? <WrapperTextlight>Login</WrapperTextlight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} alt='Logo' preview={false} height='203px' width='203px'/>
          <h4>By at ShopHuyDev</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage