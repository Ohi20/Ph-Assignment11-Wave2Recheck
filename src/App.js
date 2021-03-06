import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
        
      </Routes>
    </div>
  );
}

export default App;
