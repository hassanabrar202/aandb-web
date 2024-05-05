import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { NextUIProvider } from '@nextui-org/react'
import ContextProvider from './utils/ContextProvider';
import { Container } from '@nextui-org/react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <ContextProvider>
          <NextUIProvider>
              <ToastContainer/>
              <a className="whats-app" href="https://wa.me/+923127063064" target="_blank">
                  <i className="fa fa-whatsapp my-float"></i>
              </a>
              <div className='max-w-[2000px] m-auto'>
                  <App/>
              </div>
          </NextUIProvider>
      </ContextProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
