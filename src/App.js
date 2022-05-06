import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Sheard/Footer/Footer';
import SignIn from './Pages/Login/SignIn/SignIn';
import Login from './Pages/Login/Login/Login';
import MyItem from './Pages/MyItem/MyItem';
import ForOFor from './Pages/Sheard/ForOFor/ForOFor';
import Header from './Pages/Sheard/Header/Header';
import Inventorys from './Pages/Inventory/Inventorys/Inventorys';
import Inventory from './Pages/Inventory/Inventory/Inventory';
import AddItem from './Pages/AddItem/AddItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Sheard/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='signin' element={<SignIn />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='manageInventorys' element={
          <RequireAuth><Inventorys /></RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={<Inventory />}></Route>
        <Route path='myItem' element={
          <RequireAuth><MyItem /></RequireAuth>
        }></Route>
        <Route path='addItem' element={
          <RequireAuth><AddItem /></RequireAuth>
        }></Route>
        <Route path='*' element={<ForOFor />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
