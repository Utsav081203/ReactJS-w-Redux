import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice';
import {Header, Footer} from './components/index.js';
import {Outlet} from 'react-router-dom';

function App() {
  // check is user is logged in from state
  // if logged in then only show posts

  const[loading, setLoading] = useState(true);
  // when we fetch data from appwrite, we need to know it is still ongoing or not
  // network request or database request takes time.

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      // we get output from last promise into this one.
      if(userData) {
        dispatch(login({userData}));
      }
      else
      {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false));
    // finally always executes after promises
    // loading is done, so set to false
  }, []);
  // as soon as web renders, get current user

  // conditional rendering
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* from react router dom */}
          You're Logged In.
          {/* <Outlet></Outlet> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
