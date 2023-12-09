//import Clock from './Clock'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login';
import Layout from './Layout';
import AddProduct from './Page/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
    <Layout>
     
        <Routes>
          <Route path="/" element={<Home HomeTitle="this is title of hoe page" subtitle="this is subtitle" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>

        <ToastContainer />
    </Layout>
    </Router>
  );
}

export default App
8