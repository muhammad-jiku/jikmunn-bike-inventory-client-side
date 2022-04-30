import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import BikeInventories from './Pages/BikeInventories/BikeInventories/BikeInventories';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ManageItems from './Pages/Items/ManageItems/ManageItems';
import AddItem from './Pages/Items/AddItem/AddItem';
import MyItems from './Pages/Items/MyItems/MyItems';
import LogIn from './Pages/Authentication/LogIn/LogIn';
import Register from './Pages/Authentication/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bikeInventories" element={<BikeInventories />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/manageitems" element={<ManageItems />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/myitems" element={<MyItems />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
