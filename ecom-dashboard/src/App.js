import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import Header from './Header';
import Register from './Register';
import Login from './Login';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected'
import ProductList from './ProductList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>E-Comm-Project</h1>
        <Routes>
          <Route path="/add" element={<Protected Component={AddProduct} />} />

          <Route path="/update" element={<Protected Component={UpdateProduct} />} />

          <Route path="/productList" element={<Protected Component={ProductList} />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
