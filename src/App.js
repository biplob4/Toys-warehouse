import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Sheard/Footer/Footer';
import SignIn from './Pages/Login/SignIn/SignIn';
import Login from './Pages/Login/Login/Login';
import MyItem from './Pages/MyItem/MyItem';
import ForOFor from './Pages/Sheard/ForOFor/ForOFor';
import Header from './Pages/Sheard/Header/Header';
import Inventorys from './Pages/Inventory/Inventorys/Inventorys';


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='signin' element={<SignIn/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='manageInventorys' element={<Inventorys/>}></Route>
        <Route path='myItem' element={<MyItem/>}></Route>
        <Route path='*' element={<ForOFor/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
