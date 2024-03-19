import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import ProfileSettings from './Components/ProfileSettings'
import Media from './Components/Media'
import Product from './Components/ProductPage/Product'
import Cart from './Components/Cart/Carts'
import ReturnPolicy from './Components/ReturnPolicy'
import Orders from './Components/Orders';
import AddItem from './Components/AddItem';
import ContactUs from './Components/ContactUs';
import Help from './Components/Help/Help';
import MainPage from './Components/Blog/MainPage';
import ProductDetails from './Components/Blog/ProductDetails';
import Blog2 from './Components/Blog2';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<ProfileSettings/>}  />
    <Route path='/media' element={<Media/>} />   
    <Route path='/product' element={<Product/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/returnpolicy' element={<ReturnPolicy/>} />  
    <Route path='/add-product' element={<AddItem/>}/>
    <Route path='/orders' element={<Orders/>} />
    <Route path='/blog1' element={<MainPage/>} />
    <Route path='/:id' element={<ProductDetails/>} />
    <Route path='/blog2' element={<Blog2/>} />
    <Route path='/connect' element={<ContactUs/>} />
    <Route path='/help' element={<Help/>} />
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;