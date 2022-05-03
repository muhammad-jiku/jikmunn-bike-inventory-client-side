import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import BikeInventories from './Pages/BikeInventories/BikeInventories/BikeInventories';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
// import ManageItems from './Pages/Items/ManageItems/ManageItems';
import AddItem from './Pages/Items/AddItem/AddItem';
import MyItems from './Pages/Items/MyItems/MyItems';
import LogIn from './Pages/Authentication/LogIn/LogIn';
import Register from './Pages/Authentication/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
// import BikeInventory from './Pages/BikeInventories/BikeInventory/BikeInventory';
import BikeInventoryDetails from './Pages/BikeInventories/BikeInventoryDetails/BikeInventoryDetails';
import RequiredAuth from './Pages/Authentication/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/manageinventories"
          element={
            <RequiredAuth>
              <BikeInventories />
            </RequiredAuth>
          }
        />
        <Route
          path="/manageinventory/:manageinventoryId"
          element={
            <RequiredAuth>
              <BikeInventoryDetails />
            </RequiredAuth>
          }
        />
        {/* <Route path="/manageinventories" element={<ManageItems />} /> */}
        <Route
          path="/additem"
          element={
            <RequiredAuth>
              <AddItem />
            </RequiredAuth>
          }
        />
        <Route
          path="/myitems"
          element={
            <RequiredAuth>
              <MyItems />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
