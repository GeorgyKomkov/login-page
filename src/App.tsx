import React from 'react';
import Login from './components/pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Login />
    </>
  );
};

export default App;