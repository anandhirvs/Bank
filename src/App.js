import React from "react";
import Navbars from './Navbar'
import Create from './Create'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import Alldata from './Alldata'
import Home from './Home'
import userContext from './context'
import { HashRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <HashRouter>
        <userContext.Provider
          value={{
            users: [
              {
                name: "Anandhi",
                email: "anandhi.k@rvsgroup.com",
                password: "9865412175",
                balance: 1000
              }
            ]
          }}
        >
          <Navbars></Navbars>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Create' element={<Create />}></Route>
            <Route path='/Deposit' element={<Deposit />}></Route>
            <Route path='/Withdraw' element={<Withdraw />}></Route>
            <Route path='/Alldata' element={<Alldata />}></Route>
          </Routes>
        </userContext.Provider>
      </HashRouter>
    </div>
  )
}