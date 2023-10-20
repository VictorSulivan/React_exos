import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Count from './Components/count/count';
import Todolist from './Components/todo/to-do-list';
import User from './Components/profil/userAccount';
import NavigationTabs from './Components/navbar/menu';
import UserList from './Pages/User/UserList';
import ProductList from './Pages/Product/ProductList'
function App() {
  
  return (
    <div className="App">
      <div className='containerapp'>
      <BrowserRouter>
        <NavigationTabs/>
        <Routes>
          <Route exact path="/" element={<Count />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/user/:userId" element={<User/>} />
          <Route path="/userList" element={<UserList/>}/>
          <Route path="/productList" element={<ProductList/>} />
        </Routes>
      </BrowserRouter>
      </div>
  </div>
  );
}

export default App;
