import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Birds from './pages/Birds/Birds';
import Mammals from './pages/Mammals/Mammals';
import Reptiles from './pages/Reptiles/Reptiles';
import AnimalDetail from './components/AnimalDetail/AnimalDetail'; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/mammals" element={<Mammals />} />
          <Route path="/reptiles" element={<Reptiles />} />
          <Route path="/animal/:id" element={<AnimalDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
