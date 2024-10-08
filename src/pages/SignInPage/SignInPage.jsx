import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextlight } from './style.js'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo-login.png'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../services/user.service.js';
import { useMutationHooks } from '../../hooks/useMutationHook.js'
import Loading from '../../components/LoadingComponent/Loading.jsx'
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/slides/userSlide.js'
import * as message from '../../components/Message/Message.jsx';

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mutation = useMutationHooks(data => UserService.loginUser(data))

  const { data, isPending, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      localStorage.setItem('access_token', data?.access_token);
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess, data, navigate])

  const handleGetDetailsUser = async (id, token) => {
    try {
      const res = await UserService.getDetailUser(id, token);
      if (res?.data) {
        dispatch(updateUser({ ...res.data, access_token: token }));
      } else {
        console.error('User data is undefined');
        message.error('Failed to fetch user details');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      message.error('An error occurred while fetching user details');
    }
  }

  const handleNavigateSignUp = () => {
    navigate('/sign-up');
  }

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  }

  const handleOnChangePassword = (value) => {
    setPassword(value);
  }

  const handleSigIn = () => {
    mutation.mutate({
      email,
      password
    })
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgb(0,0,0,0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Hello</h1>
          <p>Login or create account</p>

          <InputForm
            style={{ marginBottom: '10px' }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleOnChangeEmail}
          />

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
              onChange={handleOnChangePassword}
              value={password}
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
            />
          </div>

          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}

          <Loading isPending={isPending}>
            <ButtonComponent
              onClick={handleSigIn}
              disabled={!email.length || !password.length}
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
            />
          </Loading>

          <p><WrapperTextlight>Forget password ?</WrapperTextlight></p>
          <p>you have account ? <WrapperTextlight onClick={handleNavigateSignUp}>Create account</WrapperTextlight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} alt='Logo' preview={false} height='203px' width='203px' />
          <h4>By at ShopHuyDev</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage