import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import axios from 'axios';

import {
  useQuery,
} from '@tanstack/react-query'


function App() {
  const [data, setData] = useState([]);



  // useEffect(() => {
  //   fetchApi();
  // }, []); // Chạy chỉ một lần khi component mount

  // const fetchApi = async () => {
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_API_URL}/product/get-all`);
  //     const result = await response.json();
  //     // console.log(result);
  //     console.log('process.env.REACT_API_URL_BACKEND', process.env.REACT_APP_API_URL)
  //     setData(result); // Lưu dữ liệu vào state
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const fetchApi = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`);
    return res.data
  }

  const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })

  console.log('query', query);

  console.log(data)

  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const Page = route.page;
          const Layout = route.isShowHeader ? DefaultComponent : Fragment;
          return (
            <Route key={route.path} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
