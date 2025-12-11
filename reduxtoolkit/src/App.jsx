import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Product from './product'
import { clearAllItem } from './redux/slice'
import { useDispatch } from 'react-redux'
import { BrowserRouter , Routes  , Route } from 'react-router-dom'
import CartList from './Cartlist'


function App() {

  const dispatch = useDispatch()
  return (
    <>
      
      <BrowserRouter >
      <Header />
      
      {/* <button onClick={() => { dispatch(clearAllItem(1)) }}  className="btn">Clear cart</button> */}
        
        <Routes>
          <Route path='/' element={<Product />}> </Route>
          <Route path='/cart' element={<CartList />}></Route>
        

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
