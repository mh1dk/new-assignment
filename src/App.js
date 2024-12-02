import './App.css';
import Products from './pages/Products';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Test from './pages/Test';
import DetailProduct from './pages/DetailProduct';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar />
  <Routes>
    
    <Route path='/' element={<Products />} />  
    <Route path='/test' element={<Test />} />  
    <Route path='/products/:id' element={<DetailProduct />} />
    
  </Routes>      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
