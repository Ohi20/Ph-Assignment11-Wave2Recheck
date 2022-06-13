import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        
      </Routes>
    </div>
  );
}

export default App;
