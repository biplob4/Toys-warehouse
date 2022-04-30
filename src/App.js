import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Sheard/Footer/Footer';
import SignIn from './Pages/Login/SignIn/SignIn';
import Login from './Pages/Login/Login/Login';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItem from './Pages/MyItem/MyItem';
import ForOFor from './Pages/Sheard/ForOFor/ForOFor';
import Header from './Pages/Sheard/Header/Header';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='signin' element={<SignIn/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='manageInventory' element={<ManageInventory/>}></Route>
        <Route path='myItem' element={<MyItem/>}></Route>
        <Route path='*' element={<ForOFor/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
