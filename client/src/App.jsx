import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import AdminUser from './components/admin-User';
import Addrecipe from './components/Addrecipe';
import RecipeList from './components/RecipeList';
import AddtoCard from './components/AddtoCard';
import BuyNow from './components/BuyNow';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<AdminUser />} />
            <Route path='/admin/addrecipe' element={<Addrecipe />} />
            <Route path='/admin/recipeList' element={<RecipeList />} />
            <Route path='/addtocart' element={<AddtoCard />} />
            <Route path='/buynow' element={<BuyNow/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
